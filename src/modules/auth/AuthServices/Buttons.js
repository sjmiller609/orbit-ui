import React from 'react'
import PropTypes from 'prop-types'

import { OauthButton } from 'instruments'
import s from './styles.scss'

const Buttons = ({ authConfig, login }) => {
  return (
    <React.Fragment>
      {authConfig.providers.map(provider => (
        <OauthButton
          key={provider.name}
          service={provider.name}
          displayName={provider.displayName}
          login={login}
          to={provider.url}
          className={s.button}
        />
      ))}
    </React.Fragment>
  )
}

Buttons.propTypes = {
  authConfig: PropTypes.object,
  login: PropTypes.bool,
}

export default Buttons
