import React from 'react'
import PropTypes from 'prop-types'

import { CardForm, Form, Checkbox } from 'instruments'

import Update from '../Data/Update'

const Platform = ({ form }) => {
  return (
    <CardForm
      title="Update Platform Settings"
      button={{
        save: form.save,
        text: 'Update',
      }}>
      <Checkbox label="Allow open signups" {...form.field('openSignups')} />
    </CardForm>
  )
}

Platform.propTypes = {
  form: PropTypes.object,
}

export default Update(Form(Platform))
