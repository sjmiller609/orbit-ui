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
    className: classnames(s.link, style && s[style], className),
    onClick,
    target: newTab ? '_blank' : null,
  }
  const arr = arrow && <Icon className={s.arrow} icon={arrow} />
  const backArr = backArrow && <Icon className={s.backArrow} icon={backArrow} />

  // only use ReactRouter NavLink if activeClassName (for performance)
  const NavLink = props.activeClassName ? NavLink1 : NavLink2
  /* eslint-disable react/display-name */
  /* eslint-disable no-unused-vars */
  /* eslint-disable react/prop-types */
  const Component =
    to && !externalUrl(to)
      ? NavLink
      : ({ to, newTab, className, onClick, children }) => (
          <a
            onClick={onClick}
            className={className}
            href={to}
            target={newTab === false ? null : '_blank'}>
            {children}
          </a>
        )
  return (
    <Component {...newProps}>
      <React.Fragment>
        {backArr}
        {Array.isArray(children) ? children.map(el => el) : children}
        {arr}
      </React.Fragment>
    </Component>
  )
}

Link.propTypes = {
  onClick: PropTypes.func,
  style: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array,
  ]),
  newTab: PropTypes.bool,
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  className: PropTypes.string,
  activeClassName: PropTypes.string,
  arrow: PropTypes.string,
  backArrow: PropTypes.string,
}

export default Link
