import React from 'react'
import PropTypes from 'prop-types'

import { TextField, Form, CardForm } from 'instruments'
import Module from '../Module'
import Submit from '../Data/ForgotPw'

const ForgotPw = ({ form }) => {
  const email = form.field('email')
  return (
    <Module title="Forgot Password">
      <CardForm
        title="Forgot Your Password?"
        button={{
          save: form.save,
          text: 'Reset Password',
        }}>
        <TextField
          type="email"
          placeholder="you@yourcompany.com"
          label="Your email"
          required
          {...email}
          focus
        />
      </CardForm>
    </Module>
  )
}

ForgotPw.propTypes = {
  form: PropTypes.object,
}
export default Submit(Form(ForgotPw))
