import PropTypes from 'prop-types'
import React from 'react'
import classnames from 'classnames'
import s from './styles.scss'
import { FormLabel } from 'instruments'
import { unCamelCase } from 'helpers/format'
import { jsonEqual, isEqual } from 'helpers/compare'

const Field = Component => {
  class Field extends React.Component {
    field = null
    timeout = null
    onChange = this.onChange.bind(this)
    validate = this.validate.bind(this)
    showError = this.showError.bind(this)
    id = this.props.id || this.props.name
    state = {
      showError: this.props.showError || false,
      touched: false,
    }
    componentWillMount() {
      const { defaultValue, value, convert } = this.props
      // add timeout so that multiple set states don't overwrite each other
      if (defaultValue && value === null) {
        const v = convert ? convert(defaultValue) : defaultValue
        setTimeout(() => this.onChange(null, v), 0)
      }
    }

    componentDidMount() {
      const { focus } = this.props
      if (focus) this.field.focus()
    }

    componentWillReceiveProps({ value, type, submitted, showError }) {
      const set = {}

      // for keyValue field
      if (showError !== this.props.showError) set.showError = showError

      // update type (for show password)
      if (type !== this.props.type) set.type = type

      // show error on submit
      if (submitted && !this.props.submitted) set.showError = true

      if (!jsonEqual(value, this.props.value)) {
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
      {
        value,
        error,
        type,
        submitted,
        name,
        showError: showError2,
        required,
        data,
      },
      { showError, touched }
    ) {
      if (!jsonEqual(value, this.props.value)) return true
      if (!isEqual(error, this.props.error)) return true
      if (!isEqual(type, this.props.type)) return true
      if (!isEqual(name, this.props.name)) return true
      if (!isEqual(submitted, this.props.submitted)) return true

      if (!isEqual(required, this.props.required)) return true
      // read from props also, but may not have error
      if (!isEqual(showError2, this.props.showError)) return true
      if (!isEqual(showError, this.state.showError)) return true
      if (!isEqual(touched, this.state.touched)) return true
      // some fields require original data to be passed through
      if (!isEqual(data, this.props.data)) return true
      return false
    }

    componentWillUnmount() {
      clearTimeout(this.timeout)
    }

    onChange(e, v) {
      const { name, onChange, convert } = this.props
      let value2 = e ? e.target.value : v
      if (convert) value2 = convert(value2, true)
      onChange(name, value2)
    }

    showError(showError = true) {
      if (showError === this.state.showError) return
      this.setState({ showError })
    }

    validate(value) {
      const { validate, name, required } = this.props
      if (required && (typeof value !== 'boolean' && !value)) {
        const n = name.split('.').pop()
        return unCamelCase(n) + ' is required'
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
        convert,
        value,
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
        showError,
        setRef: ref => (this.field = ref),
        validate: this.validate,
        onChange: this.onChange,
        onBlur: touched ? () => this.showError(true) : null,
        setShowError: this.showError,
        error: err ? <div className={s.errorMsg}>{error}</div> : null,
        label: label ? (
          <FormLabel id={this.id} info={info}>
            {label}
          </FormLabel>
        ) : null,
      }
      if (value) newProps.value = value
      if (convert) {
        newProps.value = convert(newProps.value)
        newProps.convert = convert
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
      PropTypes.object,
      PropTypes.array,
    ]),
    data: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
      PropTypes.object,
      PropTypes.array,
    ]),
    defaultValue: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
      PropTypes.object,
      PropTypes.array,
    ]),
    title: PropTypes.string,
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    className: PropTypes.string,
    updateErrors: PropTypes.func,
    submitted: PropTypes.bool,
    showError: PropTypes.bool,
    info: PropTypes.string,
    convert: PropTypes.func,
  }

  Field.defaultProps = {
    value: '',
    label: '',
  }

  return Field
}

export default Field
