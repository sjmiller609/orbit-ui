import PropTypes from 'prop-types'
import React from 'react'
import s from './styles.scss'
import classnames from 'classnames'
import { Field, TextField, Mini, TextButton } from 'instruments'
import { jsonEqual } from 'helpers/compare'

class Table extends React.Component {
  validate = this.validate.bind(this)
  remove = this.remove.bind(this)
  add = this.add.bind(this)
  renderRow = this.renderRow.bind(this)
  removeEmpties = this.removeEmpties.bind(this)

  fieldProps = this.fieldProps.bind(this)

  componentWillMount() {
    const { value } = this.props
    if (value[value.length - 1]) this.add()
  }

  componentDidMount() {
    const { value, registerOnSubmit, name } = this.props
    this.validate(value) // adds required fields to form
    if (registerOnSubmit)
      registerOnSubmit({ name, onSubmit: this.removeEmpties })
  }

  componentWillReceiveProps({ value, data }) {
    if (!jsonEqual(value, this.props.value)) {
      // run validation
      this.validate(value)
    }
    if (
      data &&
      data.length !== this.props.data.length &&
      value[value.length - 1]
    )
      this.add(value)
  }

  removeEmpties(data) {
    if (!data) return
    return data.filter(d => !!d)
  }

  validate(value) {
    const { name, validate, unique, updateErrors } = this.props
    let e

    if (validate) e = validate(value)
    if (unique && value) if (e) updateErrors(name, e)
  }

  fieldProps(i) {
    const { unique, value, title } = this.props
    const { className, ...props } = this.props.fieldProps
    const newProps = {
      ...props,
      ...this.props.formField(this.props.name + '.' + i),
      className: classnames(s.field, className),
      required: this.props.required,
      formField: this.props.formField,
    }
    if (unique && value && value.length)
      newProps.validate = v => {
        if (value.some((v0, i) => i !== value.length - 1 && v0 === v))
          return (
            'That ' + (title.toLowerCase() || 'value') + ' is already added.'
          )
      }
    return newProps
  }

  remove(i) {
    const { onChange, value } = this.props
    const v2 = Array.from(value)
    v2.splice(i, 1)
    onChange(null, v2, true)
  }

  add(v) {
    const { onChange, value } = this.props
    const v2 = Array.from(v && v.length ? v : value)
    if (v2[v2.length - 1] === null) return
    v2.push(null)
    onChange(null, v2)
  }

  renderRow(v, i) {
    const { Row, getRowProps, value } = this.props
    if (i === value.length - 1) return null
    return (
      <Row
        key={i}
        {...getRowProps(v)}
        className={s.tableRow}
        remove={() => this.remove(i)}
      />
    )
  }

  render() {
    const { value, id, title, className, Empty, FieldType } = this.props
    let count = value ? value.length - 1 : 0
    if (count === 1 && !value[0]) count = 0

    return (
      <div id={id} className={classnames(s.fields, className)}>
        {count > 0 ? (
          <React.Fragment>
            <div className={classnames(s.tableBorder, count > 1 && s.border)}>
              <div className={classnames(s.table, count === 1 && s.one)}>
                {value.map((v, i) => this.renderRow(v, i))}
              </div>
            </div>
            {title &&
              count > 1 && (
                <Mini className={s.right}>
                  {count} {title.toLowerCase()}
                  {count > 1 ? 's' : ''}
                </Mini>
              )}
          </React.Fragment>
        ) : (
          Empty && <Empty />
        )}

        <div className={s.field}>
          <FieldType
            {...this.fieldProps(value.length > 0 ? value.length - 1 : 0)}
          />
          <TextButton className={s.add} onClick={this.add}>
            Add Another
          </TextButton>
        </div>
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
  data: PropTypes.array,
  unique: PropTypes.bool,
}

Table.defaultProps = {
  FieldType: TextField,
  fieldProps: {},
  value: [],
  unique: true,
}

export default Field(Table)
