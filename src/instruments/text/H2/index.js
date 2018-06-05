'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import s from './styles.scss'

const H2 = ({ children, className }) => {
  return <h2 className={classnames(s.h2, className)}>{children}</h2>
}

H2.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  className: PropTypes.string,
}

export default H2
