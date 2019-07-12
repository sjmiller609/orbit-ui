'use strict'
import PropTypes from 'prop-types'
import React from 'react'
import { Link, Row } from 'instruments'
import s from './styles.scss'
import classnames from 'classnames'

const OauthButton = ({
  service,
  displayName,
  login,
  to,
  className,
  ...props
}) => {
  const action = login ? 'Login' : 'Sign up'
  return (
    <Row full className={classnames(className)}>
      <Link
        {...props}
        to={to}
        title={action + ' with ' + displayName}
        newTab={false}
        className={classnames(s.button, s[service])}>
        <span>
          {login ? 'Login' : 'Sign up'} with {displayName}
        </span>
      </Link>
    </Row>
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
