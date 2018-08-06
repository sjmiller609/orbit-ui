import React from 'react'
import PropTypes from 'prop-types'

import { OauthButton } from 'instruments'
import s from './styles.scss'

const Buttons = ({ authConfig, login }) => {
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
      <OauthButton
        service="github"
        login={login}
        to={authConfig.googleOAuthUrl}
        className={s.button}
      />
    </React.Fragment>
  )
}

Buttons.propTypes = {
  authConfig: PropTypes.object,
  login: PropTypes.bool,
}

export default Buttons
