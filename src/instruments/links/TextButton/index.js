'use strict'
import PropTypes from 'prop-types'
import React from 'react'
import s from './styles.scss'
import classnames from 'classnames'
import { Link } from 'instruments'

const TextButton = ({ children, style, className, ...props }) => {
  return (
    <Link {...props} className={classnames(s.link, s[style], className)}>
      {children}
    </Link>
  )
}

TextButton.propTypes = {
  style: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
}

export default TextButton
