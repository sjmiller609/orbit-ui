'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import s from './styles.scss'

const Icon = ({ icon, className }) => {
  const src = require(`./${icon}.svg`)
  return <img src={src} className={classnames(s.icon, className)} />
}

Icon.propTypes = {
  icon: PropTypes.string,
  className: PropTypes.string,
}

export default Icon
