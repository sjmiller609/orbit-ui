import React from 'react'
import PropTypes from 'prop-types'
import { FormSection, Select } from 'instruments'
import info from '../info'
import s from './styles.scss'
import Selector from './Selector'
import CeleryConfig from './CeleryConfig'

export const options = [
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
    disabled: true,
  },
]

const Executor = ({ form, deploymentConfig }) => {
  const executor = form.field('config.executor')
  let config
  if (executor.value === 'CeleryExecutor') {
    config = (
      <CeleryConfig
        form={form}
        deploymentConfig={deploymentConfig}
        className={s.executorConfig}
      />
    )
  }
  return (
    <FormSection id="executor" title="Executor" sub="test">
      <Select
        {...executor}
        label="Executor Plugin"
        className={s.selectors}
        Component={Selector}
        options={options}
        info={info.executor}
        required
        defaultValue="LocalExecutor"
        // validate={v => {
        //   if (
        //     v === 'CeleryExecutor' &&
        //     form.field('properties.astro_units').value < 2
        //   )
        //     return 'The Celery Executor requires at least 2 AU. Please adjust your settings.'
        // }}
      />
      {config}
    </FormSection>
  )
}

Executor.propTypes = {
  form: PropTypes.object,
  deploymentConfig: PropTypes.object,
}

export default Executor
