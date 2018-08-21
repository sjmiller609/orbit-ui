import PropTypes from 'prop-types'
import React from 'react'
import s from './styles.scss'
import classnames from 'classnames'
import { Row, Slider } from 'instruments'

class NumberField extends React.Component {
  constructor(props) {
    super(props)
    this.timeout = null
    this.onChange = this.onChange.bind(this)
    this.validate = this.validate.bind(this)
    this.showError = this.showError.bind(this)
    this.slider = this.slider.bind(this)

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

  componentWillReceiveProps({ value, error, submitted }) {
    const set = {}
    // show error on submit
    if (submitted && !this.props.submitted) set.showError = true

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
  shouldComponentUpdate({ value, error, submitted }, { showError, touched }) {
    if (value !== this.props.value) return true
    if (error !== this.props.error) return true
    if (submitted !== this.props.submitted) return true
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
    const {
      validate,
      name,
      updateErrors,
      required,
      min,
      max,
      step,
      defaultValue,
    } = this.props
    let e

    if (required && (typeof value !== 'boolean' && !value)) {
      e = name.charAt(0).toUpperCase() + name.slice(1) + ' is required'
    } else if (value) {
      if (isNaN(value)) e = 'Please enter a number'
      else if (value < min) e = 'The minimum possible value is ' + min
      else if (value > max) e = 'The maximum possible value is ' + max
      else if (step) {
        const v = defaultValue ? value - defaultValue : value
        const d = v % step
        if (d !== 0) {
          e =
            'Please enter a valid value. Nearby values are ' +
            (Number(value) - d) +
            ' and ' +
            (Number(value) + d)
        }
      } else if (validate) {
        e = validate(value)
      }
    }

    updateErrors(name, e)
  }

  slider(value) {
    const { name, onChange } = this.props
    onChange(name, value)
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
      min,
      max,
      defaultValue,
      step,
      slider,
    } = this.props
    const { id, showError, touched } = this.state
    const err = showError && !!error

    const valueProps = {
      min,
      max,
      value: value || defaultValue,
      step,
    }
    return (
      <div
        className={classnames(
          s.field,
          err ? s.error : null,
          required ? s.required : null,
          className
        )}>
        {label ? <label htmlFor={id}>{label}</label> : null}
        <Row justify="flex-start">
          <input
            type="number"
            name={name}
            id={id}
            placeholder={placeholder}
            required={required}
            onChange={this.onChange}
            title={title}
            onBlur={touched ? () => this.showError(true) : null}
            ref={ref => (this.field = ref)}
            {...valueProps}
          />
          {slider && (
            <Slider
              {...valueProps}
              className={s.slider}
              onChange={this.slider}
            />
          )}
        </Row>
        {err && <div className={s.errorMsg}>{error}</div>}
      </div>
    )
  }
}

NumberField.propTypes = {
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
  submitted: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
  defaultValue: PropTypes.number,
  step: PropTypes.number,
  slider: PropTypes.bool,
}

NumberField.defaultProps = {
  value: '',
  label: '',
}

export default NumberField
