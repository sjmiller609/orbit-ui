import React from 'react'
import PropTypes from 'prop-types'

import s from './styles.scss'
import { CardForm, Form, TextField, TextArea, FormSection } from 'instruments'

import DeploymentConfig from '../Data/Config'

import Executor from './Executor'
import Info from './Info'
import Usage from './Usage'
import info from '../info'

class Configure extends React.Component {
  renderConfig = this.renderConfig.bind(this)
  state = {
    renderConfig: false,
  }
  // delay rendering of config for lazy loading (ux performance)
  componentWillMount() {
    setTimeout(() => this.setState({ renderConfig: true }), 10)
  }

  renderConfig() {
    const { form, deploymentConfig } = this.props
    return (
      <React.Fragment>
        <Executor form={form} deploymentConfig={deploymentConfig} create />
        <Usage
          deploymentConfig={deploymentConfig}
          executor={form.field('config.executor').value}
          info={info.resourcesNew}
        />
      </React.Fragment>
    )
  }

  render() {
    const { form } = this.props
    return (
      <CardForm
        title="New Deployment"
        button={{
          save: form.save,
          text: 'Save',
        }}
        className={s.card}>
        <FormSection id="info">
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
          <Info type="airflow" version="1.9" />
        </FormSection>
        {this.state.renderConfig && this.renderConfig()}
      </CardForm>
    )
  }
}

Configure.propTypes = {
  form: PropTypes.object,
  deploymentConfig: PropTypes.object,
}

export default DeploymentConfig(Form(Configure))
