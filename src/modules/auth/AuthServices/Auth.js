import React from 'react'
import PropTypes from 'prop-types'

import Data from '../Data'
import EmailPw from './EmailPw'
import Buttons from './Buttons'
import { CardForm, Row, Link, Mini, Redirect } from 'instruments'
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
                Please review {' '}
                <Link to="https://www.astronomer.io/terms">terms of service</Link>{' '}
                and{' '}
                <Link to="https://www.astronomer.io/privacy">privacy policy</Link>{' '}
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
              {(authConfig.googleEnabled ||
                authConfig.githubEnabled ||
                authConfig.auth0Enabled) && (
                <Row className={s.or}>
                  <hr />
                  or
                  <hr />
                </Row>
              )}
            </React.Fragment>
          )}

        <Buttons authConfig={authConfig} login={login} />
        {/* <div className={s.terms}>
        {login ? (
          <Mini>
        <Link to="https://www.astronomer.io/terms">Terms</Link>
        <Link to="https://www.astronomer.io/privacy">Privacy</Link>
        <Link to="https://www.astronomer.io/security">Security</Link>
          </Mini>
        ) : (
          <Mini>
        By signing up and using Astronomer, you agree to our{' '}
        <Link to="https://www.astronomer.io/terms">terms of service</Link>{' '}
        and{' '}
        <Link to="https://www.astronomer.io/privacy">privacy policy.</Link>
          </Mini>
        )}
      </div> */}
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
