'use strict'
import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'instruments'
import s from './styles.scss'
import classnames from 'classnames'

// pass in 'to' prop for a link instead of button
const Button = ({
  onClick,
  style,
  children,
  submit,
  disabled,
  to,
  className,
  ...props
}) => {
  if (to) {
    return (
      <Link
        {...props}
        to={to}
        className={classnames(
          s.button,
          disabled ? s.disabled : null,
          s[style],
          className
        )}
        onClick={
          /* istanbul ignore next */ e => (disabled ? e.preventDefault() : e)
        }>
        {children}
      </Link>
    )
  }
  // NOTE: icons dont get added to buttons
  return (
    <Link>
      <button
        className={classnames(
          s.button,
          disabled ? s.disabled : null,
          s[style],
          className
        )}
        type={submit ? 'submit' : 'button'}
        onClick={onClick}
        disabled={disabled}>
        {children}
      </button>
    </Link>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  style: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  submit: PropTypes.bool,
  disabled: PropTypes.bool,
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  className: PropTypes.string,
}

export default Button
