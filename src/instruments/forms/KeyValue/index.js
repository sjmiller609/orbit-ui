import PropTypes from 'prop-types'
import React from 'react'
import s from './styles.scss'
import classnames from 'classnames'
import { TextField, Row, H5 } from 'instruments'

class KeyValue extends React.Component {
  validate = this.validate.bind(this)
  valueProps = this.valueProps.bind(this)
  keyProps = this.keyProps.bind(this)

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

  keyProps() {
    const { name, label, placeholder, title, className } = this.props.keyProps
    const n = name || 'key'
    return {
      ...this.props.formField(this.props.name + '.' + n),
      label: label || n,
      placeholder: placeholder || n,
      title: title || n,
      className: classnames(s.key, className),
    }
  }

  valueProps() {
    const { name, label, placeholder, title, className } = this.props.valueProps
    const n = name || 'value'
    return {
      ...this.props.formField(this.props.name + '.' + n),
      label: label || n,
      placeholder: placeholder || n,
      title: title || n,
      className: classnames(s.value, className),
    }
  }

  render() {
    const { KeyField, ValueField, id, className } = this.props
    const keyProps = this.keyProps()
    //console.log(keyProps)
    return (
      <Row id={id} className={classnames(s.field, className)}>
        <KeyField {...keyProps} />
        <H5 className={s.colon}>:</H5>
        <ValueField {...this.valueProps()} />
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

  name: PropTypes.string.isRequired,
  id: PropTypes.string,
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
}

KeyValue.defaultProps = {
  KeyField: TextField,
  ValueField: TextField,
  keyProps: {},
  valueProps: {},
}

export default KeyValue
