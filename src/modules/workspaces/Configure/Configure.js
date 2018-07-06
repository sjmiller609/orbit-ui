import React from 'react'
import PropTypes from 'prop-types'

import { CardForm, Form, TextField, TextArea } from 'instruments'

import Update from '../Data/Update'

const Configure = ({ form }) => {
  return (
    <CardForm
      title="Configure"
      button={{
        save: form.save,
        text: 'Update',
      }}>
      <TextField
        type="text"
        placeholder="Workspace Name"
        label="Workspace Name"
        required
        {...form.field('label')}
        focus
      />
      <TextArea
        placeholder="Description"
        label="Description"
        {...form.field('description')}
      />
    </CardForm>
  )
}

Configure.propTypes = {
  save: PropTypes.bool,
  form: PropTypes.object,
}

export default Update(Form(Configure))
