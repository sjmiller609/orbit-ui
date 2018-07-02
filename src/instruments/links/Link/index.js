'use strict'
import PropTypes from 'prop-types'
import React from 'react'
import { NavLink as NavLink1, Link as NavLink2 } from 'react-router-dom'
import s from './styles.scss'
import classnames from 'classnames'
import { Icon } from 'instruments'
import { externalUrl } from './helpers'

const Link = ({
  children,
  onClick,
  style,
  to,
  className,
  newTab,
  arrow,
  backArrow,
  ...props
}) => {
  const newProps = {
    ...props,
    to,
    className: classnames(s.link, s[style], className),
    onClick,
    target: newTab ? '_blank' : null,
  }
  const arr = arrow && <Icon className={s.arrow} icon="arrow" />
  const backArr = backArrow && <Icon className={s.backArrow} icon="arrow" />

  // only use ReactRouter NavLink if activeClassName (for performance)
  const NavLink = props.activeClassName ? NavLink1 : NavLink2
  /* eslint-disable react/display-name */
  const Component =
    to && !externalUrl(to)
      ? NavLink
      : props => (
          <a {...props} href={to} target={newTab === false ? null : '_blank'} />
        )
  return (
    <Component {...newProps}>
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
