'use strict'
import PropTypes from 'prop-types'
import React from 'react'
import { Link as A } from 'react-router-dom'
import s from './styles.scss'
import classnames from 'classnames'

const Link = ({ children, onClick, style, to, className, newTab, arrow }) => {
  const arr = arrow ? (
    <span className={s.arrow}>
      <span>&#8592;</span>
    </span>
  ) : null
  return (
    <A
      to={to}
      className={classnames(s.link, s[style], className)}
      onClick={onClick}
      target={newTab ? '_blank' : null}>
      <React.Fragment>
        {children}
        {arr}
      </React.Fragment>
    </A>
  )
}

Link.propTypes = {
  onClick: PropTypes.func,
  style: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  newTab: PropTypes.bool,
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  className: PropTypes.string,
  arrow: PropTypes.bool,
}

export default Link
