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
  title,
  exact,
  ...props
}) => {
  /* istanbul ignore next */
  const t = title ? title : typeof children === 'string' ? children : ''
  return (
    <Link
      {...props}
      to={to}
      title={t}
      exact={exact}
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
  title: PropTypes.string,
  exact: PropTypes.bool,
}

Item.defaultProps = {
  exact: true,
}

export default Item
