'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import s from './styles.scss'

const H1 = ({ children, className }) => {
  return (
    <h1 className={classnames(s.h1, className)}>
      {children}
    </h1>
  )
}

H1.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array,
  ]),
  className: PropTypes.string,
}

export default H1
