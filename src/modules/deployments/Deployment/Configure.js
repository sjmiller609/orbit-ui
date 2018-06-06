import React from 'react'
import PropTypes from 'prop-types'

import s from './styles.scss'
import { CardForm, Form, TextField, H2 } from '../../../instruments'

import Create from '../Data/Create'

const Configure = ({ title, form, deployment }) => {
  return (
    <CardForm
      title={title}
      button={{
        save: form.save,
        text: 'Update',
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
      <H2>{deployment.release_name}</H2>
    </CardForm>
  )
}

Configure.propTypes = {
  title: PropTypes.string,
  save: PropTypes.bool,
  form: PropTypes.object,
  deployment: PropTypes.object,
}

export default Create(Form(Configure))
