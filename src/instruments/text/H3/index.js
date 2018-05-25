'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import s from './styles.scss'

const H3 = ({ children, className }) => {
  return <h3 className={classnames(s.h3, className)}>{children}</h3>
}

H3.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  className: PropTypes.string,
}

export default H3
