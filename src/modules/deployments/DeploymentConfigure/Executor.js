import React from 'react'
import PropTypes from 'prop-types'
import { Select } from 'instruments'
import info from '../info'
import s from './styles.scss'
import Selector from './Selector'
import CeleryConfig from './CeleryConfig'

class Executor extends React.Component {
  renderConfig = this.renderConfig.bind(this)
  options = [
    {
      icon: 'airflow_astro',
      text: 'Local',
      value: 'LocalExecutor',
    },
    {
      icon: 'celery',
      text: 'Celery',
      value: 'CeleryExecutor',
    },
    {
      icon: 'kubernetes',
      text: 'Kubernetes (coming soon)',
      value: 'KubernetesExecutor',
    },
  ]
  componentWillMount() {
    const { deploymentConfig } = this.props
    Object.keys(deploymentConfig.executors).map(e => {
      const i = this.options.findIndex(o => o.value === e)
      this.options[i].disabled = !deploymentConfig.executors[e].enabled
    })
  }

  renderConfig(executor) {
    const { form, deploymentConfig, create } = this.props
    if (!create && executor === 'CeleryExecutor')
      return (
        <CeleryConfig
          form={form}
          deploymentConfig={deploymentConfig}
          className={s.executorConfig}
        />
      )
  }

  render() {
    const { form } = this.props
    const executor = form.field('config.executor')

    return (
      <React.Fragment>
        <Select
          {...executor}
          label="Executor"
          className={s.selectors}
          Component={Selector}
          options={this.options}
          info={info.executor}
          required
          defaultValue="CeleryExecutor"
        />
        {this.renderConfig(executor.value)}
      </React.Fragment>
    )
  }
}

Executor.propTypes = {
  form: PropTypes.object,
  deploymentConfig: PropTypes.object,
  create: PropTypes.bool,
}

export default Executor
