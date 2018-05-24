import PropTypes from 'prop-types'
import React from 'react'
import s from './styles.scss'
import classnames from 'classnames'

export const isEmail = email => {
  return new RegExp(
    '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$'
  ).test(email)
}

class TextField extends React.Component {
  constructor(props) {
    super(props)
    //  this.field = React.createRef();
    this.timeout = null
    this.onChange = this.onChange.bind(this)
    this.validate = this.validate.bind(this)
    this.showError = this.showError.bind(this)

    const { type, id, name } = this.props
    this.state = {
      type: type === 'email' ? 'text' : type,
      id: id || name,
      showError: false,
      touched: null,
    }
  }

  componentDidMount() {
    const { focus, value, type } = this.props
    if (focus) this.field.focus()
    this.validate({ value, type }) // adds required fields to form
  }

  componentWillReceiveProps({ value, type, error }) {
    const set = {}

    // update type (for show password)
    if (type !== this.props.type) set.type = type

    if (value !== this.props.value) {
      set.showError = false

      // run validation
      this.validate({ value, type, error })

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
  shouldComponentUpdate({ value, error, type }, { showError, touched }) {
    if (value !== this.props.value) return true
    if (error !== this.props.error) return true
    if (type !== this.props.type) return true
    if (showError !== this.state.showError) return true
    if (touched !== this.state.touched) return true
    return false
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  onChange(e) {
    const { name, onChange, type } = this.props
    const value = type === 'text' ? e.target.value : e.target.value.trim()
    onChange(name, value)
  }

  showError(showError = true) {
    if (showError === this.state.showError) return
    this.setState({ showError })
  }

  validate({ value, type }) {
    const { validate, name, updateErrors, required } = this.props
    let e

    if (required && (typeof value !== 'boolean' && !value)) {
      e = name.charAt(0).toUpperCase() + name.slice(1) + ' is required'
    }
    if (value) {
      if (type === 'email' && !isEmail(value)) {
        e = 'Please enter a valid email.'
        // run custom validation
      } else if (validate) {
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
    const { type, id, showError, touched } = this.state
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
        <input
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          required={required}
          onChange={this.onChange}
          value={value}
          title={title}
          onBlur={touched ? () => this.showError(true) : null}
          ref={ref => (this.field = ref)}
        />
        {err && <div className={s.errorMsg}>{error}</div>}
      </div>
    )
  }
}

TextField.propTypes = {
  type: PropTypes.string,
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
  // TODO: implement these for use in config
  // pattern: PropTypes.string,
  // dataList: PropTypes.array,
}

TextField.defaultProps = {
  type: 'text',
  value: '',
  label: '',
}

export default TextField
