import React from 'react'
import PropTypes from 'prop-types'

import s from './styles.scss'
import { CardForm, Form, TextField, TextArea, FormSection } from 'instruments'

import info from '../info'
import DeploymentConfig from '../Data/Config'

import EnvVars from './EnvVars'
import Info from './Info'
import Executor from './Executor'
import Resource from './Resource'
import Usage from './Usage'

import { gteSeven } from '../helpers'
import { isTrialing } from 'helpers/trial'

class ExtraResourcesForm extends React.Component {
  render() {
    const { form, deploymentConfig, deployment } = this.props
    const extraAu = deployment.properties.extra_au

    return (
      <Resource
        label="Extra Capacity"
        field={form.field('properties.extra_au')}
        defaultValue={extraAu != undefined ? extraAu : 0}
        min={0}
        max={deploymentConfig.maxExtraAu}
        step={10}
        info={info.astroUnit}
        convertValue={null}
        astroUnit={deploymentConfig.astroUnit}
        deployment={deployment}
      />
    )
  }
}

ExtraResourcesForm.propTypes = {
  form: PropTypes.object,
  deploymentConfig: PropTypes.object,
  deployment: PropTypes.object,
}

class Configure extends React.Component {
  renderConfig = this.renderConfig.bind(this)

  componentWillMount() {
    this.props.loaded('configure')
  }

  renderConfig() {
    const { form, deployment } = this.props
    return <EnvVars form={form} deployment={deployment} />
  }

  render() {
    const { form, deploymentConfig, deployment } = this.props
    const disabled = isTrialing(deployment.workspace)
    return (
      <CardForm
        title="Configure"
        button={{
          save: form.save,
          text: 'Update',
        }}
        className={s.card}>
        {disabled &&
          deployment.workspace.billingEnabled && (
            <FormSection
              id="notice"
              title="Notice"
              text="Adding override env vars and changing your deployment is not available during your free trial. Input a payment method to your workspace to unlock this feature."
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
          <Info deployment={deployment} />
        </FormSection>
        {gteSeven(deployment.version) && this.renderConfig()}
        {disabled &&
          deployment.workspace.billingEnabled && (
            <FormSection
              id="notice"
              title="Notice"
              text="Configuring resources is not available during your free trial.
            Input a payment method to your workspace to unlock this
            feature."
            />
          )}
        <FormSection id="executor">
          <Executor
            form={form}
            deploymentConfig={deploymentConfig}
            deployment={deployment}
            disabled={disabled}
          />
        </FormSection>
        <FormSection id="components">
          <Resource
            label="Webserver"
            field={form.field('config.webserver.resources.limits')}
            defaultValue={
              deploymentConfig.defaults.webserver.resources.requests
            }
            max={deploymentConfig.limits.webserver.resources.limits}
            info={info.webserver}
            required
            astroUnit={deploymentConfig.astroUnit}
            deployment={deployment}
          />
          <Resource
            label="Scheduler"
            field={form.field('config.scheduler.resources.limits')}
            defaultValue={
              deploymentConfig.defaults.scheduler.resources.requests
            }
            max={deploymentConfig.limits.scheduler.resources.limits}
            info={info.scheduler}
            required
            astroUnit={deploymentConfig.astroUnit}
            deployment={deployment}
          />
        </FormSection>
        <FormSection id="resources" title="Resources">
          {deploymentConfig.singleNamespace || (
            <ExtraResourcesForm {...this.props} />
          )}
          <Usage
            extra={form.field('properties.extra_au').value}
            config={form.field('config').value}
            deploymentConfig={deploymentConfig}
            executor={form.field('config.executor').value}
            info={info.resourcesUpdate}
          />
        </FormSection>
      </CardForm>
    )
  }
}

Configure.propTypes = {
  form: PropTypes.object,
  deployment: PropTypes.object,
  deploymentConfig: PropTypes.object,
  loaded: PropTypes.func,
  workspaceId: PropTypes.string,
}

export default DeploymentConfig(Form(Configure))
