'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import s from './styles.scss'
import { Mini } from 'instruments'

const Tag = ({ children, className }) => {
  return <Mini className={classnames(s.tag, className)}>{children}</Mini>
}

Tag.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
  className: PropTypes.string,
}

export default Tag
