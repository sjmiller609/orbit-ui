'use strict'
import PropTypes from 'prop-types'
import React from 'react'
import { Link, Row, Load } from 'instruments'
import s from './styles.scss'
import classnames from 'classnames'

const services = {
  google: {
    text: 'Continue with Google',
    img: Load(() => import('./img/google.svg')),
  },
}

const OauthButton = ({
  onClick,
  service,
  disabled,
  to,
  className,
  ...props
}) => {
  const oauth = services[service]
  return (
    <Link
      {...props}
      to={to}
      onClick={onClick}
      title={oauth.text}
      className={classnames(
        s.button,
        disabled ? s.disabled : null,
        s[oauth.className],
        className
      )}>
      <Row>
        <div className={s.img}>
          <img src={oauth.img} />
        </div>
        {oauth.text}
      </Row>
    </Link>
  )
}

OauthButton.propTypes = {
  onClick: PropTypes.func,
  service: PropTypes.string,
  disabled: PropTypes.bool,
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  className: PropTypes.string,
}

export default OauthButton
