'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import s from './styles.scss'

const H4 = ({ children, className }) => {
  return (
    <h4 className={classnames(s.h4, className)}>
      {children}
    </h4>
  )
}

H4.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array,
  ]),
  className: PropTypes.string,
}

export default H4
