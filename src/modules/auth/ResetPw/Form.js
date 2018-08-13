import React from 'react'
import PropTypes from 'prop-types'

import { Password, Form, CardForm } from 'instruments'
import Module from '../Module'

const ResetPw = ({ form }) => {
  const pw = form.field('password')
  const pw2 = form.field('confirm')
  return (
    <Module title="Reset Password">
      <CardForm
        title="Enter your new password"
        button={{
          save: form.save,
          text: 'Reset Password',
        }}>
        <Password label="New password" {...pw} />
        <Password label="Confirm new password" {...pw2} confirm={pw.value} />
      </CardForm>
    </Module>
  )
}

ResetPw.propTypes = {
  form: PropTypes.object,
}
export default Form(ResetPw)
