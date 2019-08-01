import React from 'react'
import PropTypes from 'prop-types'

import s from './styles.scss'
import { CardForm, Form, FormSection } from 'instruments'
import info from '../info'
import DeploymentConfig from '../Data/Config'

import Executor from './Executor'
import Resource from './Resource'
import Usage from './Usage'
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

class ResourcesForm extends React.Component {
  componentDidMount() {
    this.props.loaded('resources')
  }
  render() {
    const { form, deploymentConfig, deployment } = this.props
    const disabled = isTrialing(deployment.workspace)
    return (
      <CardForm
        title="Configure Components"
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

ResourcesForm.propTypes = {
  form: PropTypes.object,
  deploymentConfig: PropTypes.object,
  loaded: PropTypes.func,
  deployment: PropTypes.object,
}

export default DeploymentConfig(Form(ResourcesForm))
