import React from 'react'
import PropTypes from 'prop-types'

import s from './styles.scss'
import { CardForm, Form, FormSection } from 'instruments'
import info from '../info'
import DeploymentConfig from '../Data/Config'

import Executor from './Executor'
import Resource from './Resource'
import Usage from './Usage'

class ResourcesForm extends React.Component {
  componentDidMount() {
    this.props.loaded('resources')
  }
  render() {
    const { form, deploymentConfig } = this.props
    return (
      <CardForm
        title="Configure Components"
        button={{
          save: form.save,
          text: 'Update',
        }}
        className={s.card}>
        <FormSection id="executor">
          <Executor form={form} deploymentConfig={deploymentConfig} />
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
          />
        </FormSection>

        <FormSection id="resources" title="Resources">
          <Resource
            label="Extra Capacity"
            field={form.field('properties.astro_units')}
            defaultValue={0}
            min={0}
            max={deploymentConfig.maxExtraAu}
            step={10}
            info={info.astroUnit}
            convertValue={null}
            astroUnit={deploymentConfig.astroUnit}
          />
          <Usage
            extra={form.field('properties.astro_units').value}
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
}

export default DeploymentConfig(Form(ResourcesForm))
