'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import s from './styles.scss'

const P = ({ children, center, className }) => {
  return (
    <p className={classnames(s.p, center && s.center, className)}>{children}</p>
  )
}

P.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array,
  ]),
  className: PropTypes.string,
  center: PropTypes.bool,
}

export default P
