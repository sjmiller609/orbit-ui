import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { default as RCSlider } from 'rc-slider'
import 'rc-slider/assets/index.css'

import s from './styles.scss'

class Slider extends React.Component {
  render() {
    const { className, ...props } = this.props
    return <RCSlider {...props} className={classnames(s.slider, className)} />
  }
}

Slider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number,
  step: PropTypes.number,
  onChange: PropTypes.func,
  className: PropTypes.string,
}

export default Slider
