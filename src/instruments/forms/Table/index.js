import PropTypes from 'prop-types'
import React from 'react'
import s from './styles.scss'
import classnames from 'classnames'
import { Field, TextField, Mini } from 'instruments'
import { jsonEqual } from 'helpers/compare'

class Table extends React.Component {
  validate = this.validate.bind(this)
  remove = this.remove.bind(this)
  add = this.add.bind(this)
  renderField = this.renderField.bind(this)
  renderRow = this.renderRow.bind(this)

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
    return <FieldType {...this.fieldProps(i)} />
  }
  renderRow(value, i) {
    const { Row, getRowProps } = this.props
    return (
      <Row
        key={i}
        {...getRowProps(value)}
        className={s.tableRow}
        remove={() => null}
      />
    )
  }

  render() {
    const { value, id, title, className } = this.props
    let count = value ? value.length : 0
    return (
      <div id={id} className={classnames(s.fields, className)}>
        <div className={classnames(s.tableBorder, count > 1 && s.border)}>
          <div className={classnames(s.table, count === 1 && s.one)}>
            {value.map((v, i) => this.renderRow(v, i))}
          </div>
        </div>
        {title && (
          <Mini>
            {count} {title.toLowerCase()}
            {count > 1 ? 's' : ''}
          </Mini>
        )}
        <div className={s.field}>{this.renderField()}</div>
      </div>
    )
  }
}

Table.propTypes = {
  fieldProps: PropTypes.object,
  FieldType: PropTypes.func,
  formField: PropTypes.func,
  Row: PropTypes.func,
  Empty: PropTypes.func,
  getRowProps: PropTypes.func,
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

Table.defaultProps = {
  FieldType: TextField,
  fieldProps: {},
  value: [],
}

export default Field(Table)
