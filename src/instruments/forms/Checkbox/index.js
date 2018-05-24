'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import s from './styles.scss'
import classNames from 'classnames'

class Checkbox extends React.Component {
  constructor(props) {
    super(props)
    this.change = this.change.bind(this)
    this.onChange = this.onChange.bind(this)
    this.timeout = null
    this.validate = this.validate.bind(this)
    this.showError = this.showError.bind(this)

    const { id, name, value } = this.props
    this.state = {
      id: id || name,
      showError: false,
      touched: null,
      checked: !!value,
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

      if (!!value && !this.state.checked) set.checked = true
      else if (!value && this.state.checked) set.checked = false
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

  onChange(value) {
    const { name, onChange } = this.props
    onChange(name, value)
  }

  change(e) {
    if (e) e.preventDefault()
    const checked = !this.state.checked
    this.setState({ checked })
    this.onChange(checked)
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
    if (value || typeof value === 'boolean') {
      if (validate) {
        e = validate(value)
      }
    }

    updateErrors(name, e)
  }

  render() {
    const { className, label, name, value, required } = this.props
    const { checked } = this.state

    return (
      <div
        className={classNames(
          s.checkbox,
          required ? s.required : null,
          className
        )}>
        <input
          type="checkbox"
          name={name}
          checked={checked}
          value={value || ''}
          className={s.input}
          required={required}
          onChange={this.onChange}
        />

        <div
          className={classNames(s.box, checked ? s.on : s.off)}
          onClick={this.change}>
          <div className={s.check} />
        </div>

        {label && <label>{label}</label>}
      </div>
    )
  }
}

Checkbox.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  className: PropTypes.string,
  updateErrors: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
  focus: PropTypes.bool,
  validate: PropTypes.func, // check if isValid, return error message
  required: PropTypes.bool,
}

export default Checkbox
