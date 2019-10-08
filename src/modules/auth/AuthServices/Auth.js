import React from 'react'
import PropTypes from 'prop-types'

import Data from '../Data'
import EmailPw from './EmailPw'
import { Link, CardForm, Row, Mini, OauthButton } from 'instruments'
import s from './styles.scss'

class Auth extends React.Component {
  componentWillMount() {
    // Allow the Oauth buttons on Login
    if (this.props.login) this.setState({ accept: true })
  }

  render() {
    const { authConfig = {}, login, cli, token } = this.props
    const signupEnabled =
      authConfig.initialSignup || authConfig.publicSignup || !!token
    const showFields = login || signupEnabled

    return (
      <CardForm
        title={login ? 'Log In to Astronomer' : 'Sign Up'}
        smallForm
        className={s.card}>
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
        <div className={s.legal}>
          By {login ? 'logging in' : 'signing up'} you agree our{' '}
          <Link to="https://www.astronomer.io/terms">terms of service</Link> and{' '}
          <Link to="https://www.astronomer.io/privacy">privacy policy</Link>.
        </div>
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
