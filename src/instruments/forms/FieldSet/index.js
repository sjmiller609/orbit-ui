import PropTypes from 'prop-types'
import React from 'react'
import s from './styles.scss'
import classnames from 'classnames'
import { Field, TextField, TextButton } from 'instruments'
import { jsonEqual } from 'helpers/compare'

class FieldSet extends React.Component {
  validate = this.validate.bind(this)
  fieldProps = this.fieldProps.bind(this)
  state = {
    length: this.props.value.length || 1,
  }

  componentWillReceiveProps({ value }) {
    if (!jsonEqual(value, this.props.value)) {
      // run validation
      this.validate(value)
    }
  }

  validate(value) {
    const { name, validate, updateErrors } = this.props
    let e
    if (validate) {
      // only validation is if passed in as prop
      e = validate(value)
      updateErrors(name, e)
    }
  }

  fieldProps(i) {
    const { className, ...props } = this.props.fieldProps
    return {
      ...props,
      ...this.props.formField(this.props.name + '.' + i),
      className: classnames(s.field, className),
      required: this.props.required,
      formField: this.props.formField,
    }
  }

  render() {
    const { FieldType, id, className } = this.props
    const { length } = this.state

    return (
      <div id={id} className={classnames(s.fields, className)}>
        {Array.from(Array(length)).map((f, i) => (
          <FieldType key={i} {...this.fieldProps(i)} />
        ))}
        <TextButton
          className={s.button}
          onClick={() => this.setState({ length: length + 1 })}>
          Add Another
        </TextButton>
      </div>
    )
  }
}

FieldSet.propTypes = {
  fieldProps: PropTypes.object,
  FieldType: PropTypes.func,
  formField: PropTypes.func,
  value: PropTypes.array,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  validate: PropTypes.func,
  updateErrors: PropTypes.func,
  required: PropTypes.bool,
  className: PropTypes.string,
}

FieldSet.defaultProps = {
  FieldType: TextField,
  fieldProps: {},
  value: [],
}

export default Field(FieldSet)
