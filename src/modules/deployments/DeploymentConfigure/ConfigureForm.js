import React from 'react'
import PropTypes from 'prop-types'

import s from './styles.scss'
import {
  CardForm,
  Form,
  TextField,
  TextArea,
  TextFieldSelect,
  NumberField,
  Select,
  B,
  Mini,
  ShowDate,
  FormSection,
} from 'instruments'

import { default as WorkerSize, workerSizes } from './WorkerSize'

import info from '../_docs'
const envVars = Object.keys(info.env)

// This form is used for both Update and Create mutations
const Configure = ({ form, deployment }) => {
  return (
    <CardForm
      title="Configure"
      button={{
        save: form.save,
        text: deployment ? 'Update' : 'Save',
      }}
      className={s.card}>
      <FormSection id="info">
        {deployment && (
          <Mini className={s.info}>
            <span>{deployment.type}</span> deployment{' '}
            <B>{deployment.releaseName}</B> deployed{' '}
            <ShowDate date={deployment.createdAt} />
          </Mini>
        )}
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
      </FormSection>
      <FormSection id="workers" title="Celery Workers">
        <Select
          {...form.field('workerSize')}
          label="Worker Size"
          required
          className={s.workers}
          defaultValue="small"
          Component={WorkerSize}
          options={workerSizes}
          info={info.workerSize}
        />
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
      </FormSection>
      <FormSection id="env" title="Environment Variables">
        <TextFieldSelect
          placeholder="Variable"
          label="Variable Name"
          options={envVars}
          {...form.field('env')}
        />
      </FormSection>
    </CardForm>
  )
}

Configure.propTypes = {
  form: PropTypes.object,
  deployment: PropTypes.object,
}

export default Form(Configure)
