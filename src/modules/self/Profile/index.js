import React from 'react'
import PropTypes from 'prop-types'

import { CardForm, Form, TextField } from 'instruments'

import Update from '../Data/Update'

const Profile = ({ form }) => {
  return (
    <CardForm
      title="Update Your Profile"
      button={{
        save: form.save,
        text: 'Update',
      }}>
      <TextField
        type="text"
        placeholder="Full Name"
        label="Your Name"
        required
        {...form.field('fullName')}
        focus
      />
    </CardForm>
  )
}

Profile.propTypes = {
  form: PropTypes.object,
}

export default Update(Form(Profile))
