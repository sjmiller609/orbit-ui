import PropTypes from 'prop-types'
import React from 'react'
import { Field } from 'instruments'
import s from './styles.scss'
import classnames from 'classnames'

const isEmail = email => {
  return new RegExp(
    '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$'
  ).test(email)
}

class TextField extends React.Component {
  validate = this.validate.bind(this)
  onChange = this.onChange.bind(this)

  state = {
    type: 'text',
  }
  componentDidMount() {
    const { value } = this.props
    this.validate(value) // adds required fields to form
  }
  componentWillReceiveProps({ value }) {
    if (value !== this.props.value) {
      // run validation
      this.validate(value)
    }
  }
  componentWillMount() {
    const { type } = this.props
    this.setState({
      type: type === 'email' ? 'text' : type,
    })
  }

  onChange(e) {
    const { onChange } = this.props
    let value = e.target.value
    onChange(null, value)
  }

  validate(value) {
    const { name, validate, updateErrors } = this.props
    let e
    // must be first
    if (validate) e = validate(value)
    if (value) {
      if (this.props.type === 'email' && !isEmail(value)) {
        e = 'Please enter a valid email.'
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
      id,
      className,
      onBlur,
      setRef,
      fieldId,
      disabled,
    } = this.props
    const { type } = this.state
    return (
      <div
        id={fieldId}
        className={classnames(disabled ? s.disabled : null, className)}>
        {label}
        <input
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          required={required}
          onChange={this.onChange}
          value={value || ''}
          title={title}
          onBlur={onBlur}
          ref={setRef}
          disabled={disabled}
          maxLength={512}
        />
        {error}
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
  onBlur: PropTypes.func,
  validate: PropTypes.func,
  required: PropTypes.bool,
  label: PropTypes.element,
  value: PropTypes.string,
  title: PropTypes.string,
  error: PropTypes.element,
  className: PropTypes.string,
  fieldId: PropTypes.string,
  updateErrors: PropTypes.func,
  setRef: PropTypes.func,
  disabled: PropTypes.bool,
}

TextField.defaultProps = {
  type: 'text',
  value: '',
}

export default Field(TextField)
