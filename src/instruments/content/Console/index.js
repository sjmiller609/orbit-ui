'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import s from './styles.scss'

const Console = ({ children, className }) => {
  return (
    <div className={classnames(s.content, className)}>
      {Array.isArray(children) ? children.map(el => el) : children}
    </div>
  )
}

Console.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
  className: PropTypes.string,
}

export default Console
