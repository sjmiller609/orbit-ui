import PropTypes from 'prop-types'
import React from 'react'
import s from './styles.scss'
import classnames from 'classnames'
import { Field } from 'instruments'

class TextArea extends React.Component {
  validate = this.validate.bind(this)

  componentWillReceiveProps({ value }) {
    if (value !== this.props.value) {
      // run validation
      this.validate(value)
    }
  }

  validate(value) {
    const { name, validate, updateErrors } = this.props
    let e
    // must be first
    if (validate) e = validate(value)

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
      onChange,
      setRef,
    } = this.props

    return (
      <div
        className={classnames(
          s.field,

          className
        )}>
        {label}

        <textarea
          name={name}
          id={id}
          placeholder={placeholder}
          required={required}
          onChange={onChange}
          title={title}
          onBlur={onBlur}
          ref={setRef}
          value={value || ''}
        />
        {error}
      </div>
    )
  }
}

TextArea.propTypes = {
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
  updateErrors: PropTypes.func,
  setRef: PropTypes.func,
}

export default Field(TextArea)
