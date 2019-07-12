import React from 'react'
import PropTypes from 'prop-types'

import Data from '../Data'
import EmailPw from './EmailPw'
import { CardForm, Row, Link, Mini, Redirect, OauthButton } from 'instruments'
import s from './styles.scss'

class Auth extends React.Component {
  render() {
    const { authConfig = {}, login: login2, cli, pathname, token } = this.props
    const signupEnabled =
      authConfig.initialSignup || authConfig.publicSignup || !!token
    let login = login2 || !signupEnabled
    return (
      <CardForm
        title={login ? 'Login to Astronomer' : 'Sign Up'}
        smallForm
        footer={
          <Row className={s.footer}>
            {!signupEnabled ? (
              <Mini>
                New to Astronomer? Please contact your system administrator to
                request access.
                {!~pathname.indexOf('/auth') && (
                  <Redirect
                    to={{
                      ...location,
                      pathname: '/auth' + (login2 ? '/login' : ''),
                    }}
                    replace
                  />
                )}
              </Mini>
            ) : (
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
            )}
          </Row>
        }
        className={s.card}>
        {authConfig.localEnabled &&
          !cli && (
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
