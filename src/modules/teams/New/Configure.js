import React from 'react'
import PropTypes from 'prop-types'

import s from './styles.scss'
import { CardForm, Form, TextField, TextArea } from '../../../instruments'

import Create from '../Data/Create'

const Configure = ({ title, form }) => {
  return (
    <CardForm
      title={title}
      button={{
        save: form.save,
        text: 'Create Team',
      }}
      className={s.card}>
      <TextField
        type="text"
        placeholder="Team Name"
        label="Team Name"
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
  title: PropTypes.string,
  save: PropTypes.bool,
  form: PropTypes.object,
}

export default Create(Form(Configure))
