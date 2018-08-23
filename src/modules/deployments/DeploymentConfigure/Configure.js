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
  B,
  P,
  Mini,
  ShowDate,
  FormSection,
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
      <FormSection id="info">
        <Mini className={s.info}>
          <span>{deployment.type}</span> deployment{' '}
          <B>{deployment.releaseName}</B> deployed on{' '}
          <ShowDate date={deployment.createdAt} />
        </Mini>
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
        <P>env variables...</P>
        <TextFieldSelect
          placeholder="Variable"
          label="Variable Name"
          options={['a', 'aa', 'b', 'c']}
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

export default Update(Form(Configure))
