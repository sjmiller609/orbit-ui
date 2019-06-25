import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { default as RCSlider } from 'rc-slider'

import s from './styles.scss'

class Slider extends React.Component {
  render() {
    const { className, disabled, ...props } = this.props
    return (
      <RCSlider
        {...props}
        className={classnames(
          s.slider,
          disabled ? s.disabled : null,
          className
        )}
      />
    )
  }
}

Slider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number,
  step: PropTypes.number,
  onChange: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
}

export default Slider
