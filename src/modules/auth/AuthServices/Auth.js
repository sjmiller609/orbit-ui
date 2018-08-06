import React from 'react'
import PropTypes from 'prop-types'

import Data from '../Data'
import EmailPw from './EmailPw'
import Buttons from './Buttons'
import { CardForm, Row } from 'instruments'
import s from './styles.scss'

const Auth = props => {
  return (
    <CardForm
      className={s.card}
      title={props.login ? 'Login' : 'Sign Up'}
      smallForm>
      <EmailPw {...props} />
      <Row className={s.or}>
        <hr />
        or
        <hr />
      </Row>
      <Buttons {...props} />
    </CardForm>
  )
}

Auth.propTypes = {
  authConfig: PropTypes.object,
  login: PropTypes.bool,
}

export default Data(Auth)
