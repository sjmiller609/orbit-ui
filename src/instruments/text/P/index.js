'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import s from './styles.scss'

const P = ({ children, className }) => {
  return <p className={classnames(s.p, className)}>{children}</p>
}

P.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  className: PropTypes.string,
}

export default P
