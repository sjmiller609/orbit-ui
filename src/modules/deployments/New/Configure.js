import React from 'react'
import PropTypes from 'prop-types'

import s from './styles.scss'
import { CardForm, Form, TextField } from '../../../instruments'

import Create from '../Data/Create'

const Configure = ({ title, form }) => {
  return (
    <CardForm
      title={title}
      button={{
        save: form.save,
        text: 'Deploy',
      }}
      className={s.card}>
      <TextField
        type="text"
        placeholder="Deployment Name"
        label="Name"
        required
        {...form.field('title')}
        focus
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
