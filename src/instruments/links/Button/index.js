'use strict'
import PropTypes from 'prop-types'
import React from 'react'
import { Link } from '../../../instruments'
import s from './styles.scss'
import classnames from 'classnames'

// pass in 'to' prop for a link instead of button
const Button = ({
  onClick,
  style,
  text,
  submit,
  disabled,
  to,
  className,
  newTab,
  arrow,
}) => {
  if (to) {
    return (
      <Link
        to={to}
        arrow={arrow}
        newTab={newTab}
        className={classnames(
          s.button,
          disabled ? s.disabled : null,
          s[style],
          className
        )}>
        {text}
      </Link>
    )
  }

  return (
    <Link arrow={arrow}>
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
        {text}
      </button>
    </Link>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  style: PropTypes.string,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  submit: PropTypes.bool,
  disabled: PropTypes.bool,
  newTab: PropTypes.bool,
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  className: PropTypes.string,
  arrow: PropTypes.bool,
}

export default Button
