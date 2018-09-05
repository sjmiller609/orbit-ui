import PropTypes from 'prop-types'
import React from 'react'
import s from './styles.scss'
import classnames from 'classnames'
import { Field, TextField, Row, H3 } from 'instruments'
import { jsonEqual } from 'helpers/compare'

class KeyValue extends React.Component {
  validate = this.validate.bind(this)
  valueProps = this.valueProps.bind(this)
  keyProps = this.keyProps.bind(this)
  key = this.props.keyProps.name || 'key'
  value = this.props.valueProps.value || 'value'

  componentWillReceiveProps({ value }) {
    if (!jsonEqual(value, this.props.value)) {
      // run validation
      this.validate(value)
    }
  }

  validate(value) {
    const { name, validate, updateErrors } = this.props
    let e
    let n
    // must be first
    if (validate) e = validate(value)
    if (value[this.value] && !value[this.key]) {
      n = this.key
      e = 'A key is required to set a value.'
    }
    // NOTE: not requiring a value when a key is set, to enable setting to empty

    updateErrors(name + '.' + n, e)
  }

  keyProps() {
    const {
      label,
      placeholder,
      title,
      className,
      ...props
    } = this.props.keyProps

    return {
      ...props,
      ...this.props.formField(this.props.name + '.' + this.key),
      label: label || this.key,
      placeholder: placeholder || this.key,
      title: title || this.key,
      className: classnames(s.key, className),
      required: this.props.required,
      validate: this.validate,
    }
  }

  valueProps() {
    const {
      label,
      placeholder,
      title,
      className,
      ...props
    } = this.props.valueProps

    return {
      ...props,
      ...this.props.formField(this.props.name + '.' + this.value),
      label: label || this.value,
      placeholder: placeholder || this.value,
      title: title || this.value,
      className: classnames(s.value, className),
      required: this.props.required,
      validate: this.validate,
    }
  }

  render() {
    const { KeyField, ValueField, id, className } = this.props
    const keyProps = this.keyProps()
    const valueProps = this.valueProps()
    return (
      <Row id={id} className={classnames(s.field, className)}>
        <KeyField {...keyProps} />
        <H3 className={s.colon}>:</H3>
        <ValueField {...valueProps} />
      </Row>
    )
  }
}

KeyValue.propTypes = {
  keyProps: PropTypes.object,
  KeyField: PropTypes.func,
  valueProps: PropTypes.object,
  ValueField: PropTypes.func,
  formField: PropTypes.func,
  value: PropTypes.object,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  validate: PropTypes.func,
  updateErrors: PropTypes.func,
  required: PropTypes.bool,
  className: PropTypes.string,
}

KeyValue.defaultProps = {
  KeyField: TextField,
  ValueField: TextField,
  keyProps: {},
  valueProps: {},
}

export default Field(KeyValue)
