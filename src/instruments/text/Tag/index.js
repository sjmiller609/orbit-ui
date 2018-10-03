'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import s from './styles.scss'

const Tag = ({ children, className }) => {
  return <span className={classnames(s.tag, className)}>{children}</span>
}

Tag.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.string,
  ]),
  className: PropTypes.string,
}

export default Tag
