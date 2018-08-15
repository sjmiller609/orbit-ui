import React from 'react'
import PropTypes from 'prop-types'

import { TextField, Form, CardForm } from 'instruments'
import Module from '../Module'
import Submit from '../Data/Resend'

const Resend = ({ form }) => {
  const email = form.field('email')
  return (
    <Module title="Resend Verification Email">
      <CardForm
        title="Resend Verification Email"
        button={{
          save: form.save,
          text: 'Resend',
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

Resend.propTypes = {
  form: PropTypes.object,
}
export default Submit(Form(Resend))
