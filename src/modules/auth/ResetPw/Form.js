import React from 'react'
import PropTypes from 'prop-types'

import { Password, Form, CardForm } from 'instruments'
import Module from '../Module'
import Submit from '../Data/ResetPw'

const ResetPw = ({ form }) => {
  const pw = form.field('password')
  const pw2 = form.field('confirm')
  return (
    <Module title="Reset Password">
      <CardForm
        title="Set Your New Password"
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
export default Submit(Form(ResetPw))
