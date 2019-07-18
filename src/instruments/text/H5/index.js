'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import s from './styles.scss'

const H5 = ({ children, className, handleClick }) => {
  return (
    <h5 onClick={handleClick} className={classnames(s.h5, className)}>
      {children}
    </h5>
  )
}

H5.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array,
  ]),
  className: PropTypes.string,
  handleClick: PropTypes.func,
}

export default H5
