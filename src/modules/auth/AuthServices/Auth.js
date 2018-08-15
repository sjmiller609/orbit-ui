import React from 'react'
import PropTypes from 'prop-types'

import Data from '../Data'
import EmailPw from './EmailPw'
import Buttons from './Buttons'
import { CardForm, Row, Link, Mini } from 'instruments'
import s from './styles.scss'

const Auth = ({ authConfig = {}, login, cli }) => {
  return (
    <CardForm
      title={login ? 'Login to Astronomer' : 'Sign Up'}
      smallForm
      footer={
        <Row className={s.footer}>
          <Mini>
            <Link to="https://www.astronomer.io/contact">
              Contact Astronomer
            </Link>
          </Mini>
        </Row>
      }
      className={s.card}>
      {authConfig.localEnabled &&
        !cli && (
          <React.Fragment>
            <EmailPw login={login} to={cli ? '/token' : null} />
            <Row className={s.or}>
              <hr />
              or
              <hr />
            </Row>
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

Auth.propTypes = {
  authConfig: PropTypes.object,
  login: PropTypes.bool,
  cli: PropTypes.bool,
}

export default Data(Auth)
