'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import s from './styles.scss'

const B = ({ children, className }) => {
  return <b className={classnames(s.b, className)}>{children}</b>
}

B.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.number,
  ]),
  className: PropTypes.string,
}

export default B
