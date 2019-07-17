import React from 'react'
import PropTypes from 'prop-types'

import Data from '../Data'
import EmailPw from './EmailPw'
import { CardForm, Row, Link, Mini, OauthButton } from 'instruments'
import s from './styles.scss'

class Auth extends React.Component {
  render() {
    const { authConfig = {}, login, cli, token } = this.props
    const signupEnabled =
      authConfig.initialSignup || authConfig.publicSignup || !!token
    const showFields = login || signupEnabled
    return (
      <CardForm
        title={login ? 'Login to Astronomer' : 'Sign Up'}
        smallForm
        className={s.card}
        footer={
          signupEnabled ? (
            <Row className={s.footer}>
              {' '}
              <Mini>
                Please review{' '}
                <Link to="https://www.astronomer.io/terms">
                  terms of service
                </Link>{' '}
                and{' '}
                <Link to="https://www.astronomer.io/privacy">
                  privacy policy
                </Link>{' '}
                prior to signing up for Astronomer Cloud.
              </Mini>
            </Row>
          ) : null
        }>
        {!signupEnabled &&
          !showFields && (
            <Mini className={s.cardBody}>
              It looks like public signups are disabled on your Astronomer
              cluster. Please contact your system administrator to have them
              create an account for you.
            </Mini>
          )}
        {authConfig.localEnabled &&
          !cli &&
          showFields && (
            <React.Fragment>
              <EmailPw
                login={login}
                to={cli ? '/token' : null}
                vars={{ inviteToken: token }}
                alert={false}
              />
              {authConfig.providers && <Row className={s.or}>or</Row>}
            </React.Fragment>
          )}
        {showFields &&
          authConfig.providers.map(provider => (
            <OauthButton
              key={provider.name}
              service={provider.name}
              displayName={provider.displayName}
              login={login}
              to={provider.url}
              className={s.button}
            />
          ))}
      </CardForm>
    )
  }
}

Auth.propTypes = {
  authConfig: PropTypes.object,
  login: PropTypes.bool,
  cli: PropTypes.bool,
  pathname: PropTypes.string,
  token: PropTypes.string,
}

export default Data(Auth)
