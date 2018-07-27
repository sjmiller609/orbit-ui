'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import s from './styles.scss'

const Triangle = ({ className }) => {
  return <span className={classnames(s.triangle, className)} />
}

Triangle.propTypes = {
  className: PropTypes.string,
}

export default Triangle
