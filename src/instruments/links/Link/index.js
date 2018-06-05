'use strict'
import PropTypes from 'prop-types'
import React from 'react'
import { Link as A } from 'react-router-dom'
import s from './styles.scss'
import classnames from 'classnames'
import { Icon } from '../../../instruments'

const Link = ({ children, onClick, style, to, className, newTab, arrow }) => {
  const arr = arrow && <Icon className={s.arrow} icon="arrow" />
  const A2 = props => <a {...props} />
  const Component = to ? A : A2
  return (
    <Component
      to={to}
      className={classnames(s.link, s[style], className)}
      onClick={onClick}
      target={newTab ? '_blank' : null}>
      <React.Fragment>
        {children}
        {arr}
      </React.Fragment>
    </Component>
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