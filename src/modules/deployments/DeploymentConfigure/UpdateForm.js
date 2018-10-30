import React from 'react'
import PropTypes from 'prop-types'

import s from './styles.scss'
import { CardForm, Form, TextField, TextArea, FormSection } from 'instruments'

import DeploymentConfig from '../Data/Config'

import EnvVars from './EnvVars'
import Info from './Info'

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
    const { form } = this.props
    return <EnvVars form={form} />
  }

  render() {
    const { form, deployment } = this.props
    return (
      <CardForm
        title="Configure"
        button={{
          save: form.save,
          text: 'Update',
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
          <Info deployment={deployment} type={deployment.type} version="1.9" />
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
