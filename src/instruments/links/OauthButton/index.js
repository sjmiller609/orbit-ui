'use strict'
import PropTypes from 'prop-types'
import React from 'react'
import { Link, Row, Box, Icon, LoadImg } from 'instruments'
import s from './styles.scss'
import classnames from 'classnames'

const images = {
  google: LoadImg(() => import(`./img/google.svg`)),
  github: LoadImg(() => import(`./img/github.svg`)),
  auth0: LoadImg(() => import(`./img/auth0.svg`)),
  okta: LoadImg(() => import('./img/okta.png')),
}

const OauthButton = ({
  service,
  displayName,
  login,
  to,
  className,
  ...props
}) => {
  const Img = images[service]
  return (
    <Link
      {...props}
      to={to}
      title={' with ' + displayName}
      newTab={false}
      className={classnames(s.button, s[service], className)}>
      <Row full justify="flex-start">
        {Img && (
          <Box className={s.img}>
            <Img />
          </Box>
        )}
        <span className={s.text}>
          {login ? 'Login' : 'Sign up'} with {displayName}
          <Icon className={s.arrow} icon="arrow_darkBg" />
        </span>
      </Row>
    </Link>
  )
}

OauthButton.propTypes = {
  service: PropTypes.string,
  displayName: PropTypes.string,
  login: PropTypes.bool,
  to: PropTypes.string,
  className: PropTypes.string,
}

export default OauthButton
