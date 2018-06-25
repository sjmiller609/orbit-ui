'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import s from './styles.scss'
import { Link } from 'instruments'

const Item = ({
  to,
  children,
  active,
  className,
  activeClassName,
  ...props
}) => {
  return (
    <Link
      {...props}
      to={to}
      exact={true}
      className={classnames(s.item, active && s.active, className)}
      activeClassName={classnames(s.active, activeClassName)}>
      {children}
    </Link>
  )
}

Item.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  className: PropTypes.string,
  activeClassName: PropTypes.string,
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  active: PropTypes.bool,
}

export default Item
