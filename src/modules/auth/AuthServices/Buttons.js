import React from 'react'
import PropTypes from 'prop-types'

import { OauthButton } from 'instruments'
import Data from '../Data'

const Buttons = ({ authConfig, login }) => {
  return (
    <React.Fragment>
      {authConfig.googleEnabled && (
        <OauthButton
          service="google"
          login={login}
          to={authConfig.googleOAuthUrl}
        />
      )}
    </React.Fragment>
  )
}

Buttons.propTypes = {
  authConfig: PropTypes.object,
  login: PropTypes.bool,
}

export default Data(Buttons)
