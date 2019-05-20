import React from 'react'
import { storiesOf } from '@storybook/react'
import { Select } from 'instruments'
import Selector from '../../../modules/deployments/DeploymentConfigure'

const options = [
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
    text: 'Kubernetes',
    value: 'KubernetesExecutor',
  },
]

storiesOf('Instruments|Forms.Select', module).add('Default', () => (
  <Select
    name="select"
    onChange={() => null}
    label="Select Label"
    defaultValue="LocalExecutor"
    title="Select Title"
    updateErrors={() => null}
    options={options}
    Component={Selector}
    fieldId="select"
  />
))
