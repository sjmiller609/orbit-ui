import React from 'react'
import {Link} from 'react-router-dom'
import classnames from 'classnames'

import styles from './styles.module.css'

const Button = ({ type, children, ...props }) => {
  const classes = classnames(
    styles.button,
    styles[props.theme],
    props.className,
    {
      [styles.disabled]: props.disabled
    }
  );

  if (type === 'submit') {
    return (
      <input type={type} value={props.value} className={classes} />
    )
  }

  if (type === 'link') {
    return (
      <Link {...props} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <a {...props} className={classes}>
      {children}
    </a>
  )
}

export default Button
