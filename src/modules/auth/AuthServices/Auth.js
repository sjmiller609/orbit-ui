import React from 'react'
import PropTypes from 'prop-types'

import Data from '../Data'
import EmailPw from './EmailPw'
import Buttons from './Buttons'
import { CardForm, Row } from 'instruments'
import s from './styles.scss'

const Auth = ({ authConfig = {}, login, cli }) => {
  return (
    <CardForm title={login ? 'Login' : 'Sign Up'} smallForm>
      {authConfig.localEnabled && (
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
    </CardForm>
  )
}

Auth.propTypes = {
  authConfig: PropTypes.object,
  login: PropTypes.bool,
  cli: PropTypes.bool,
}

export default Data(Auth)
