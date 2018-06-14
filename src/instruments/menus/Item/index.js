'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import s from './styles.scss'
import { Link } from '../../../instruments'

const Item = ({
  to,
  children,
  vertical,
  className,
  activeClassName,
  ...props
}) => {
  return (
    <Link
      {...props}
      to={to}
      exact={true}
      className={classnames(
        s.item,
        vertical ? s.vertical : s.horizontal,
        className
      )}
      activeClassName={classnames(s.active, activeClassName)}>
      {children}
    </Link>
  )
}

Item.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  className: PropTypes.string,
  activeClassName: PropTypes.string,
  to: PropTypes.string,
  vertical: PropTypes.bool,
}

export default Item
