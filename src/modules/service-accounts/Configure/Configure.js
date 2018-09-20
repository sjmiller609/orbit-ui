import React from 'react'
import PropTypes from 'prop-types'

import { CardForm, Form, TextField } from 'instruments'

import Update from '../Data/Update'

const Configure = ({ form }) => {
  return (
    <CardForm
      title="Configure"
      id="configure"
      button={{
        save: form.save,
        text: 'Update',
      }}>
      <TextField
        placeholder="Name"
        label="Name"
        required
        focus
        {...form.field('label')}
      />
      <TextField
        placeholder="Category"
        label="Category"
        {...form.field('category')}
      />
    </CardForm>
  )
}

Configure.propTypes = {
  form: PropTypes.object,
}

export default Update(Form(Configure))
