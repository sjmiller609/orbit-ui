import React from 'react'
import PropTypes from 'prop-types'
import { isTrialing } from 'helpers/trial'

import s from './styles.scss'
import { CardForm, Form, TextField, TextArea, FormSection } from 'instruments'

import DeploymentConfig from '../Data/Config'
import Executor from './Executor'
import Info from './Info'
import Usage from './Usage'
import info from '../info'

class CreateForm extends React.Component {
  renderConfig = this.renderConfig.bind(this)
  state = {
    renderConfig: false,
  }
  // delay rendering of config for lazy loading (ux performance)
  componentWillMount() {
    setTimeout(() => this.setState({ renderConfig: true }), 10)
  }

  renderConfig() {
    const { form, deploymentConfig, deployments } = this.props
    const selectedExecutor =
      form.field('config.executor').value || 'CeleryExecutor'
    const defaultExtraAu =
      deploymentConfig.executors[selectedExecutor].defaultExtraAu || 0
    const disabled = deployments[0]
      ? isTrialing(deployments[0].workspace)
      : null
    return (
      <React.Fragment>
        <FormSection id="executor">
          <Executor
            form={form}
            deploymentConfig={deploymentConfig}
            create
            disabled={disabled}
          />
        </FormSection>
        <FormSection id="resources" title="Resources" text={info.resourcesNew}>
          <Usage
            extra={defaultExtraAu}
            deploymentConfig={deploymentConfig}
            executor={form.field('config.executor').value}
          />
        </FormSection>
      </React.Fragment>
    )
  }

  render() {
    const { form, deployments } = this.props
    const disabled = deployments[0]
      ? isTrialing(deployments[0].workspace)
      : null
    return (
      <CardForm
        title="New Deployment"
        button={{
          save: form.save,
          text: 'Save',
        }}
        className={s.card}
        disable={disabled}>
        {disabled &&
          deployments[0].workspace.billingEnabled && (
            <FormSection
              id="notice"
              title="Notice"
              text="You may only have one deployment during your trial. Please input a payment method to unlock this feature."
            />
          )}
        <FormSection id="info">
          <TextField
            type="text"
            placeholder="Deployment Name"
            label="Name"
            required
            {...form.field('label')}
            focus
            disabled={disabled}
          />
          <TextArea
            placeholder="Description"
            label="Description"
            {...form.field('description')}
            disabled={disabled}
          />
          <Info type="airflow" version="1.9" />
        </FormSection>
        {this.state.renderConfig && this.renderConfig()}
      </CardForm>
    )
  }
}

CreateForm.propTypes = {
  form: PropTypes.object,
  deploymentConfig: PropTypes.object,
  deployments: PropTypes.array,
}

export default DeploymentConfig(Form(CreateForm))
