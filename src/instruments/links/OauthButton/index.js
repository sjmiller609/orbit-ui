'use strict'
import PropTypes from 'prop-types'
import React from 'react'
import { Link, Row, Box, Icon, LoadImg } from 'instruments'
import s from './styles.scss'
import classnames from 'classnames'

const services = {
  google: {
    text: ' with Google',
    img: 'google.svg',
    className: 'google',
  },
  github: {
    text: ' with Github',
    img: 'github.svg',
    className: 'github',
  },
  auth0: {
    text: ' with Auth0',
    img: 'auth0.svg',
    className: 'auth0',
  },
}

const OauthButton = ({ service, login, to, className, ...props }) => {
  const oauth = services[service]
  const Img = LoadImg(() => import(`./img/${oauth.img}`))
  return (
    <Link
      {...props}
      to={to}
      title={oauth.text}
      newTab={false}
      className={classnames(s.button, s[oauth.className], className)}>
      <Row full justify="flex-start">
        <Box className={s.img}>
          <Img />
        </Box>
        <span className={s.text}>
          {login ? 'Login' : 'Sign up'}
          {oauth.text} <Icon className={s.arrow} icon="arrow_darkBg" />
        </span>
      </Row>
    </Link>
  )
}

OauthButton.propTypes = {
  service: PropTypes.string,
  login: PropTypes.bool,
  to: PropTypes.string,
  className: PropTypes.string,
}

export default OauthButton
