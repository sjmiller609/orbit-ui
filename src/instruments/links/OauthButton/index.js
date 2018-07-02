'use strict'
import PropTypes from 'prop-types'
import React from 'react'
import { Link, Row, Box, Icon } from 'instruments'
import s from './styles.scss'
import classnames from 'classnames'

const services = {
  google: {
    text: ' with Google',
    img: 'google.svg',
    className: 'google',
  },
}

const OauthButton = ({ service, login, to, ...props }) => {
  const oauth = services[service]
  const img = require('./img/' + oauth.img)
  return (
    <Link
      {...props}
      to={to}
      title={oauth.text}
      newTab={false}
      className={classnames(s.button, s[oauth.className])}>
      <Row full>
        <Box className={s.img}>
          <img src={img} />
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
}

export default OauthButton
