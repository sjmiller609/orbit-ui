import React from 'react'
import PropTypes from 'prop-types'

import s from './styles.scss'
import { CardForm, Form, TextField } from 'instruments'

import Create from '../Data/Create'

const Configure = ({ title, form }) => {
  return (
    <CardForm
      title={title}
      button={{
        save: form.save,
      }}
      className={s.card}>
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
  title: PropTypes.string,
  save: PropTypes.bool,
  form: PropTypes.object,
}

export default Create(Form(Configure))
