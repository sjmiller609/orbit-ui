import React from 'react'
import PropTypes from 'prop-types'

import s from './styles.scss'
import {
  CardForm,
  Form,
  TextField,
  TextArea,
  NumberField,
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
      <a id="info" />
      <H5 className={s.name}>{deployment.releaseName}</H5>

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
      <a id="workers" />
      <NumberField
        label="Worker Count"
        required
        {...form.field('workerCount')}
        slider
        defaultValue={1}
        min={1}
        max={10}
        info="Adjusting the worker count will..."
      />
      <NumberField
        label="Worker Termination Grace Period"
        required
        {...form.field('workerTermination')}
        slider
        units="min"
        defaultValue={10}
        min={5}
        max={60}
        step={5}
        info="The worker termination grace period is..."
      />
      <a id="env" />
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
