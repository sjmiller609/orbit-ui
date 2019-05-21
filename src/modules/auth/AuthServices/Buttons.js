import React from 'react'
import PropTypes from 'prop-types'

import { OauthButton } from 'instruments'
import s from './styles.scss'

const Buttons = ({ authConfig, login }) => {
  console.log(authConfig)
  return (
    <React.Fragment>
      {authConfig.googleEnabled && (
        <OauthButton
          service="google"
          login={login}
          to={authConfig.googleOAuthUrl}
          className={s.button}
        />
      )}
      {authConfig.githubEnabled && (
        <OauthButton
          service="github"
          login={login}
          to={authConfig.githubOAuthUrl}
          className={s.button}
        />
      )}
      {authConfig.auth0Enabled && (
        <OauthButton
          service="auth0"
          login={login}
          to={authConfig.auth0OAuthUrl}
          className={s.button}
        />
      )}
      {authConfig.oktaEnabled && (
        <OauthButton
          service="okta"
          login={login}
          to={authConfig.oktaOAuthUrl}
          className={s.button}
        />
      )}
    </React.Fragment>
  )
}

Buttons.propTypes = {
  authConfig: PropTypes.object,
  login: PropTypes.bool,
}

export default Buttons
