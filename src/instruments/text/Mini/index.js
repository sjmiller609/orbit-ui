'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import s from './styles.scss'

const Mini = ({ children, className }) => {
  return (
    <p className={classnames(s.mini, className)}>
      {children}
    </p>
  )
}

Mini.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array,
  ]),
  className: PropTypes.string,
}

export default Mini
