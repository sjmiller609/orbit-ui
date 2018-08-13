import React from 'react'
import PropTypes from 'prop-types'

import s from './styles.scss'
import {
  CardForm,
  Form,
  TextField,
  TextArea,
  H5,
  P,
  Mini,
  ShowDate,
} from 'instruments'

import Update from '../Data/Update'

const Configure = ({ form, deployment }) => {
  return (
    <CardForm
      title="Configure"
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
        {...form.field('label')}
        focus
      />
      <TextArea
        placeholder="Description"
        label="Description"
        {...form.field('description')}
      />
      <H5 className={s.name}>{deployment.releaseName}</H5>
      <div className={s.deployed}>
        <P>Deployed</P>
        <Mini>
          <ShowDate date={deployment.createdAt} />
        </Mini>
      </div>
    </CardForm>
  )
}

Configure.propTypes = {
  form: PropTypes.object,
  deployment: PropTypes.object,
}

export default Update(Form(Configure))
