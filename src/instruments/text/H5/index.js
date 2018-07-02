'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import s from './styles.scss'

const H5 = ({ children, className }) => {
  return (
    <h5 className={classnames(s.h5, className)}>
      {Array.isArray(children) ? children.map(el => el) : children}
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
}

export default H5
