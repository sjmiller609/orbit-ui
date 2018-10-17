import PropTypes from 'prop-types'
import React from 'react'
import s from './styles.scss'
import classnames from 'classnames'
import { Row, Slider, Field } from 'instruments'

class NumberField extends React.Component {
  validate = this.validate.bind(this)
  slider = this.slider.bind(this)
  convert = this.convert.bind(this)
  state = {
    min: 0,
    max: 1,
    step: 1,
    units: null,
  }

  componentWillMount() {
    this.convert(this.props)
  }
  componentDidMount() {
    const { value } = this.props
    this.validate(value) // adds required fields to form
  }

  componentWillReceiveProps(props) {
    this.convert(props, true)
    if (props.value !== this.props.value) {
      // run validation
      this.validate(props.value)
    }
  }

  convert({ value, min, max, step, units, convert }, next) {
    const set = {}

    if (!next || min !== this.props.min) set.min = convert ? convert(min) : min

    if (!next || max !== this.props.max) set.max = convert ? convert(max) : max
    if (!next || step !== this.props.step)
      set.step = convert ? convert(step) : step

    if (typeof units === 'function' && (!next || value !== this.props.value))
      set.units = units(value)

    if (Object.keys(set).length) this.setState(set)
  }

  validate(value) {
    const { validate, name, updateErrors } = this.props

    const { min, max, step, units } = this.state
    let e

    const units2 = units ? ' (' + units + ')' : ''

    // must be first
    if (validate) e = validate(value)
    if (value) {
      if (isNaN(value)) e = 'Please enter a number'
      else if (value < min) e = 'The minimum possible value is ' + min + units2
      else if (value > max) e = 'The maximum possible value is ' + max + units2
      else if (step) {
        const v = min ? value - min : value
        const d = v % step
        if (d !== 0) {
          e =
            'Please enter a valid value. Nearby values are ' +
            (Number(value) - d) +
            ' and ' +
            (Number(value) + (step - d))
        }
      }
    }

    updateErrors(name, e)
  }

  slider(v) {
    const { onChange, value } = this.props
    if (value !== v) onChange(null, v)
  }

  render() {
    const {
      name,
      error,
      placeholder,
      required,
      title,
      label,
      id,
      className,
      onBlur,
      onChange,
      setRef,
      slider,
      value,
      fieldId,
    } = this.props

    const { min, max, units, step } = this.state
    const width = max.toString().length * 2.2

    return (
      <div id={fieldId} className={classnames(s.field, className)}>
        {label}
        <Row justify="flex-start">
          <input
            type="number"
            name={name}
            id={id}
            placeholder={placeholder}
            required={required}
            onChange={onChange}
            title={title}
            onBlur={onBlur}
            ref={setRef}
            style={{ width: `${width}rem` }}
            min={min}
            max={max}
            step={step}
            value={value || ''}
          />
          {units && <div className={s.units}>{units}</div>}
          {slider && (
            <Slider
              min={min}
              max={max}
              step={step}
              value={value}
              className={s.slider}
              onChange={this.slider}
            />
          )}
        </Row>
        {error}
      </div>
    )
  }
}

NumberField.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  validate: PropTypes.func,
  required: PropTypes.bool,
  focus: PropTypes.bool,
  label: PropTypes.element,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
  error: PropTypes.element,
  className: PropTypes.string,
  updateErrors: PropTypes.func,
  setRef: PropTypes.func,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  slider: PropTypes.bool,
  units: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  convert: PropTypes.func,
  fieldId: PropTypes.string,
}

NumberField.defaultProps = {
  step: 1,
}

export default Field(NumberField)
