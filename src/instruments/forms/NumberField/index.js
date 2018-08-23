import PropTypes from 'prop-types'
import React from 'react'
import s from './styles.scss'
import classnames from 'classnames'
import { Row, Slider, Field } from 'instruments'

class NumberField extends React.Component {
  validate = this.validate.bind(this)
  slider = this.slider.bind(this)

  componentWillReceiveProps({ value }) {
    if (value !== this.props.value) {
      // run validation
      this.validate(value)
    }
  }

  validate(value) {
    const { validate, name, updateErrors, min, max, step } = this.props
    let e

    // must be first
    if (validate) e = validate(value)
    if (value) {
      if (isNaN(value)) e = 'Please enter a number'
      else if (value < min) e = 'The minimum possible value is ' + min
      else if (value > max) e = 'The maximum possible value is ' + max
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

  slider(value) {
    const { onChange } = this.props
    onChange(null, value)
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
      min,
      max,
      defaultValue,
      step,
      slider,
      units,
    } = this.props
    const valueProps = {
      min,
      max,
      value: Number(value || defaultValue),
      step,
    }
    const width = max.toString().length * 2.2
    return (
      <div className={classnames(s.field, className)}>
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
            {...valueProps}
          />
          {units && <div className={s.units}>{units}</div>}
          {slider && (
            <Slider
              {...valueProps}
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
  defaultValue: PropTypes.number,
  step: PropTypes.number,
  slider: PropTypes.bool,
  units: PropTypes.string,
}

export default Field(NumberField)
