import React from 'react'
import PropTypes from 'prop-types'

import s from './styles.scss'
import {
  CardForm,
  Form,
  TextField,
  H5,
  P,
  Mini,
  ShowDate,
} from '../../../instruments'

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
  save: PropTypes.bool,
  form: PropTypes.object,
  deployment: PropTypes.object,
}

export default Update(Form(Configure))
