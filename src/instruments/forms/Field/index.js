import PropTypes from 'prop-types'
import React from 'react'
import classnames from 'classnames'
import s from './styles.scss'
import { Info } from 'instruments'
import { unCamelCase } from 'helpers/format'

const Field = Component => {
  class Field extends React.Component {
    field = null
    timeout = null
    onChange = this.onChange.bind(this)
    validate = this.validate.bind(this)
    showError = this.showError.bind(this)
    id = this.props.id || this.props.name
    state = {
      showError: false,
      touched: null,
    }

    componentDidMount() {
      const { focus, value } = this.props
      if (focus) this.field.focus()
      this.validate(value) // adds required fields to form
    }

    componentWillReceiveProps({ value, type, submitted }) {
      const set = {}

      // update type (for show password)
      if (type !== this.props.type) set.type = type

      // show error on submit
      if (submitted && !this.props.submitted) set.showError = true

      if (value !== this.props.value) {
        set.showError = false

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
    shouldComponentUpdate(
      { value, error, type, submitted },
      { showError, touched }
    ) {
      if (value !== this.props.value) return true
      if (error !== this.props.error) return true
      if (type !== this.props.type) return true
      if (submitted !== this.props.submitted) return true
      if (showError !== this.state.showError) return true
      if (touched !== this.state.touched) return true
      return false
    }

    componentWillUnmount() {
      clearTimeout(this.timeout)
    }

    onChange(e, v) {
      const { name, onChange } = this.props
      if (!e) {
        onChange(name, v)
        return
      }
      const value = e.target.value
      onChange(name, value)
    }

    showError(showError = true) {
      if (showError === this.state.showError) return
      this.setState({ showError })
    }

    validate(value) {
      const { validate, name, required } = this.props

      if (required && (typeof value !== 'boolean' && !value)) {
        return unCamelCase(name) + ' is required'
      }
      if (value && validate) {
        return validate(value)
      }

      return null
    }

    render() {
      /*eslint-disable no-unused-vars */
      const {
        error,
        label,
        info,
        submitted,
        focus,
        required,
        className,
        ...props
      } = this.props
      const { showError, touched } = this.state
      const err = showError && !!error
      const newProps = {
        ...props,
        className: classnames(
          s.field,
          err ? s.error : null,
          required ? s.required : null,
          className
        ),
        id: this.id,
        required,
        setRef: ref => (this.field = ref),
        validate: this.validate,
        onChange: this.onChange,
        onBlur: touched ? () => this.showError(true) : null,
        error: err ? <div className={s.errorMsg}>{error}</div> : null,
        label: label ? (
          <label htmlFor={this.id}>
            {label}
            <Info>{info}</Info>
          </label>
        ) : null,
      }
      return <Component {...newProps} />
    }
  }

  Field.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    id: PropTypes.string,
    onChange: PropTypes.func.isRequired, // pass in key value update function
    validate: PropTypes.func, // check if isValid, return error message
    required: PropTypes.bool,
    focus: PropTypes.bool,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
    ]),
    title: PropTypes.string,
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    className: PropTypes.string,
    updateErrors: PropTypes.func,
    submitted: PropTypes.bool,
    info: PropTypes.string,
    forwardedRef: PropTypes.object,
  }

  Field.defaultProps = {
    value: '',
    label: '',
  }

  return Field
}

export default Field
