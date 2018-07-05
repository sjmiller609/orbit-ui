import React from 'react'
import PropTypes from 'prop-types'

import s from './styles.scss'
import { CardForm, Form, TextField } from 'instruments'

import Invite from '../Data/Invite'

const Configure = ({ title, form }) => {
  return (
    <CardForm
      title={title}
      button={{
        save: form.save,
        text: 'Invite',
      }}
      className={s.card}>
      <TextField
        type="email"
        placeholder="name@yourcompany.com"
        label="Email"
        required
        focus
        {...form.field('email')}
      />
    </CardForm>
  )
}

Configure.propTypes = {
  title: PropTypes.string,
  save: PropTypes.bool,
  form: PropTypes.object,
}

export default Invite(Form(Configure))
