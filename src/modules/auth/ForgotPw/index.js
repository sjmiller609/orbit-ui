import React from 'react'
import PropTypes from 'prop-types'

import { TextField, Form, CardForm } from 'instruments'
import s from './styles.scss'
import Module from '../Module'

const ForgotPw = ({ form }) => {
  const email = form.field('email')

  return (
    <Module title="Forgot Password">
      <CardForm
        title="Forgot your password?"
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
export default Form(ForgotPw)
