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
      <H5 className={s.name}>{deployment.release_name}</H5>
      <div className={s.deployed}>
        <P>Deployed by [getName]</P>
        <Mini>
          <ShowDate date={deployment.createdAt} />
        </Mini>
      </div>
    </CardForm>
  )
}

Configure.propTypes = {
  title: PropTypes.string,
  save: PropTypes.bool,
  form: PropTypes.object,
  deployment: PropTypes.object,
}

export default Update(Form(Configure))
