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
  KeyValue,
  FieldSet,
} from 'instruments'

import { default as WorkerSize, workerSizes } from './WorkerSize'
import DeploymentConfig from '../Data/Config'

import info from '../info'
import EnvVar from './EnvVar'

import {
  workerSizeConvert,
  workerTerminationUnits,
  workerTerminationConvert,
  validateEnvVar,
} from './helpers'

class Configure extends React.Component {
  envVars = Object.keys(info.env)
  renderConfig = this.renderConfig.bind(this)
  state = {
    renderConfig: false,
  }
  // delay rendering of config for lazy loading (ux performance)
  componentWillMount() {
    setTimeout(() => this.setState({ renderConfig: true }), 10)
  }
  renderConfig() {
    const {
      form,
      deploymentConfig: { defaults, limits, presets },
    } = this.props
    // defining here so can pass value into validation function
    const env = form.field('config.env')
    return (
      <React.Fragment>
        <FormSection id="workers" title="Celery Workers">
          <Select
            {...form.field('config.workers.resources')}
            label="Worker Size"
            className={s.workers}
            defaultValue={defaults.workers.resources}
            Component={WorkerSize}
            options={workerSizes}
            info={info.workerSize}
            convert={(size, out) =>
              workerSizeConvert(size, out, presets.workerSizes)
            }
          />
          <NumberField
            label="Worker Count"
            {...form.field('config.workers.replicas')}
            slider
            defaultValue={defaults.workers.replicas}
            min={1}
            max={limits.workers.replicas}
            info={info.workerCount}
          />
          <NumberField
            label="Worker Termination Grace Period"
            {...form.field('config.workers.terminationGracePeriodSeconds')}
            slider
            units={workerTerminationUnits}
            defaultValue={defaults.workers.terminationGracePeriodSeconds}
            min={5 * 60}
            max={limits.workers.terminationGracePeriodSeconds}
            step={5 * 60}
            convert={workerTerminationConvert}
            info={info.workerTermination}
          />
        </FormSection>
        <FormSection id="env" title="Environment Variables">
          <FieldSet
            {...env}
            title="Env Variable"
            formField={form.field}
            FieldType={KeyValue}
            fieldProps={{
              KeyField: TextFieldSelect,
              keyProps: {
                Option: EnvVar,
                options: this.envVars,
                className: s.envKey,
                validate: value => validateEnvVar(value, env.value),
              },
            }}
          />
        </FormSection>
      </React.Fragment>
    )
  }
  render() {
    const { form, deployment } = this.props

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
        {this.state.renderConfig && this.renderConfig()}
      </CardForm>
    )
  }
}

Configure.propTypes = {
  form: PropTypes.object,
  deployment: PropTypes.object,
  deploymentConfig: PropTypes.object,
}

export default DeploymentConfig(Form(Configure))
