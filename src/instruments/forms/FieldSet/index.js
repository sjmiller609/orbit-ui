import PropTypes from 'prop-types'
import React from 'react'
import s from './styles.scss'
import classnames from 'classnames'
import { Field, TextField, TextButton, Button, Box } from 'instruments'
import { jsonEqual } from 'helpers/compare'

class FieldSet extends React.Component {
  validate = this.validate.bind(this)
  remove = this.remove.bind(this)
  add = this.add.bind(this)
  renderField = this.renderField.bind(this)
  fieldProps = this.fieldProps.bind(this)
  removeEmpties = this.removeEmpties.bind(this)

  componentWillMount() {
    const { value } = this.props
    if (!value || !value.length) this.add()
  }

  componentDidMount() {
    const { value, registerOnSubmit, name } = this.props
    this.validate(value) // adds required fields to form
    if (registerOnSubmit)
      registerOnSubmit({ name, onSubmit: this.removeEmpties })
  }

  componentWillReceiveProps({ value }) {
    if (!jsonEqual(value, this.props.value)) {
      // run validation
      this.validate(value)
    }
  }

  removeEmpties(data) {
    if (!data) return
    return data.filter(d => !!d)
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

  remove(i) {
    const { onChange, value } = this.props
    const v2 = Array.from(value)
    v2.splice(i, 1)
    onChange(null, v2)
  }

  add() {
    const { onChange, value } = this.props
    const v2 = Array.from(value)
    v2.push(null)
    onChange(null, v2)
  }

  // any empty fields must have the field name = next array item to prevent empties getting saved
  renderField(i) {
    const { FieldType } = this.props
    return (
      <Box align="flex-start" key={i}>
        <FieldType {...this.fieldProps(i)} />
        <TextButton
          className={s.remove}
          style="red"
          onClick={() => this.remove(i)}>
          Remove
        </TextButton>
      </Box>
    )
  }

  render() {
    const { value, id, className, title } = this.props
    const button = 'New' + (title ? ' ' + title : '')
    // const length = emptyKeys.length + value.length
    // let key = 0
    return (
      <div id={id} className={classnames(s.fields, className)}>
        {value.map((f, i) => this.renderField(i))}
        <Box>
          <Button className={s.add} style="outline" onClick={this.add}>
            {button}
          </Button>
        </Box>
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
  onChange: PropTypes.func,
  required: PropTypes.bool,
  className: PropTypes.string,
  title: PropTypes.string,
  registerOnSubmit: PropTypes.func,
}

FieldSet.defaultProps = {
  FieldType: TextField,
  fieldProps: {},
  value: [],
}

export default Field(FieldSet)
