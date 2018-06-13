'use strict'
import PropTypes from 'prop-types'
import React from 'react'
import { NavLink as NavLink1, Link as NavLink2 } from 'react-router-dom'
import s from './styles.scss'
import classnames from 'classnames'
import { Icon } from '../../../instruments'

const Link = ({
  children,
  onClick,
  style,
  to,
  className,
  activeClassName,
  newTab,
  arrow,
  backArrow,
  ...props
}) => {
  const arr = arrow && <Icon className={s.arrow} icon="arrow" />
  const backArr = backArrow && <Icon className={s.backArrow} icon="arrow" />
  const A = props => <a {...props} />
  // only use ReactRouter NavLink if activeClassName (for performance)
  const NavLink = activeClassName ? NavLink1 : NavLink2
  const Component = to ? NavLink : A
  return (
    <Component
      {...props}
      to={to}
      className={classnames(s.link, s[style], className)}
      activeClassName={activeClassName}
      onClick={onClick}
      target={newTab ? '_blank' : null}>
      <React.Fragment>
        {backArr}
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
  activeClassName: PropTypes.string,
  arrow: PropTypes.bool,
  backArrow: PropTypes.bool,
}

export default Link
