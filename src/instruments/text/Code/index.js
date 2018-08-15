'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import s from './styles.scss'

const Code = ({ children, className }) => {
  return (
    <code className={classnames(s.code, className)}>
      {children}
    </code>
  )
}

Code.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array,
  ]),
  className: PropTypes.string,
}

export default Code
