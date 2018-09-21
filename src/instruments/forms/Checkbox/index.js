'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import s from './styles.scss'
import classNames from 'classnames'
import { Row, Field } from 'instruments'

class Checkbox extends React.Component {
  change = this.change.bind(this)
  validate = this.validate.bind(this)

  state = {
    checked: !!this.props.value,
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

  change(e) {
    if (e) e.preventDefault()
    const checked = !this.state.checked
    this.setState({ checked })
    this.props.onChange(null, checked)
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
      className,
      label,
      name,
      title,
      value,
      required,
      onBlur,
      setRef,
      fieldId,
    } = this.props
    const { checked } = this.state

    return (
      <Row
        justify="flex-start"
        align="flex-start"
        auto
        id={fieldId}
        className={classNames(s.checkbox, className)}>
        <input
          type="checkbox"
          name={name}
          checked={checked}
          value={value || ''}
          className={s.input}
          required={required}
          onChange={this.change}
          onBlur={onBlur}
          ref={setRef}
          title={title}
        />

        <div
          className={classNames(s.box, checked ? s.on : s.off)}
          onClick={this.change}>
          <div className={s.check} />
        </div>

        {label}
      </Row>
    )
  }
}

Checkbox.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  validate: PropTypes.func,
  required: PropTypes.bool,
  label: PropTypes.element,
  title: PropTypes.string,
  error: PropTypes.element,
  className: PropTypes.string,
  updateErrors: PropTypes.func,
  setRef: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
  fieldId: PropTypes.string,
}

export default Field(Checkbox)
