import React from 'react'
import PropTypes from 'prop-types'

import { CardForm, Form, TextField } from 'instruments'

import info from '../info'

const Configure = ({ form, title, deploymentId }) => {
  return (
    <CardForm
      title={title || 'Configure'}
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
        info={info.name[deploymentId ? 'deployment' : 'workspace']}
        {...form.field('label')}
      />
      <TextField
        placeholder="Category"
        label="Category"
        info={info.category}
        {...form.field('category')}
      />
    </CardForm>
  )
}

Configure.propTypes = {
  form: PropTypes.object,
  title: PropTypes.string,
  deploymentId: PropTypes.string,
}

export default Form(Configure)
