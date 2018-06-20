import PropTypes from 'prop-types'
import React from 'react'
import s from './styles.scss'
import classnames from 'classnames'

class TextArea extends React.Component {
  constructor(props) {
    super(props)
    this.timeout = null
    this.onChange = this.onChange.bind(this)
    this.validate = this.validate.bind(this)
    this.showError = this.showError.bind(this)

    const { id, name } = this.props
    this.state = {
      id: id || name,
      showError: false,
      touched: null,
    }
  }

  componentDidMount() {
    const { focus, value } = this.props
    if (focus) this.field.focus()
    this.validate({ value }) // adds required fields to form
  }

  componentWillReceiveProps({ value, error }) {
    const set = {}

    if (value !== this.props.value) {
      set.showError = false

      // run validation
      this.validate({ value, error })

      // show error after 3 seconds of stopped typing
      if (this.timeout) clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        this.showError()
        clearTimeout(this.timeout)
      }, 3000)

      set.touched = true
    }

    this.setState(set)
  }

  // should probably switch this to pull the props that don't change, and then json.stringify
  // NOTE: if any new props are passed in that are meant to be reactive, won't work.
  shouldComponentUpdate({ value, error }, { showError, touched }) {
    if (value !== this.props.value) return true
    if (error !== this.props.error) return true
    if (showError !== this.state.showError) return true
    if (touched !== this.state.touched) return true
    return false
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  onChange(e) {
    const { name, onChange } = this.props
    const value = e.target.value
    onChange(name, value)
  }

  showError(showError = true) {
    if (showError === this.state.showError) return
    this.setState({ showError })
  }

  validate({ value }) {
    const { validate, name, updateErrors, required } = this.props
    let e

    if (required && (typeof value !== 'boolean' && !value)) {
      e = name.charAt(0).toUpperCase() + name.slice(1) + ' is required'
    }
    if (value) {
      if (validate) {
        e = validate(value)
      }
    }

    updateErrors(name, e)
  }

  render() {
    const {
      name,
      error,
      placeholder,
      required,
      value,
      title,
      label,
      className,
    } = this.props
    const { id, showError, touched } = this.state
    const err = showError && !!error
    return (
      <div
        className={classnames(
          s.field,
          err ? s.error : null,
          required ? s.required : null,
          className
        )}>
        {label ? <label htmlFor={id}>{label}</label> : null}
        <textarea
          name={name}
          id={id}
          placeholder={placeholder}
          required={required}
          onChange={this.onChange}
          title={title}
          onBlur={touched ? () => this.showError(true) : null}
          ref={ref => (this.field = ref)}
          value={value}
        />
        {err && <div className={s.errorMsg}>{error}</div>}
      </div>
    )
  }
}

TextArea.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  onChange: PropTypes.func.isRequired, // pass in key value update function
  validate: PropTypes.func, // check if isValid, return error message
  required: PropTypes.bool,
  focus: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  value: PropTypes.string,
  title: PropTypes.string,
  error: PropTypes.string,
  className: PropTypes.string,
  updateErrors: PropTypes.func,
}

TextArea.defaultProps = {
  value: '',
  label: '',
}

export default TextArea
