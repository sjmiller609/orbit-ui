import PropTypes from 'prop-types'
import React from 'react'
import s from './styles.scss'
import classnames from 'classnames'
import { Field, Row, Link } from 'instruments'

// This is not a dropdown, but rather a flat list of options to select one from.
class Select extends React.Component {
  validate = this.validate.bind(this)
  select = this.select.bind(this)

  componentWillMount() {
    const { defaultValue, value } = this.props
    if (!value && defaultValue) this.select(defaultValue)
  }
  componentWillReceiveProps({ value }) {
    if (value !== this.props.value) {
      // run validation
      this.validate(value)
    }
  }
  select(value) {
    this.props.onChange(null, value)
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

      required,
      value,
      title,
      label,
      id,
      className,
      onBlur,
      onChange,
      setRef,
      Component,
      options,
    } = this.props
    return (
      <div className={classnames(s.field, className)}>
        {label}
        <input
          type="hidden"
          name={name}
          id={id}
          required={required}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          ref={setRef}
        />
        <Row justify="space-between" className={s.options}>
          {options.map(o => {
            return (
              <Link key={o.value} onClick={() => this.select(o.value)}>
                <Component {...o} selected={value === o.value} />
              </Link>
            )
          })}
        </Row>
        {error}
      </div>
    )
  }
}

Select.propTypes = {
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
  options: PropTypes.array,
  Component: PropTypes.func,
  defaultValue: PropTypes.string,
}

export default Field(Select)
