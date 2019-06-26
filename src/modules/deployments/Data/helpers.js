import { formErrors } from 'instruments'

const errors = [
  {
    key: 'Workspace already has a deployment named',
    name: 'label',
    error: 'Workspace already has a deployment with that name.',
  },
  {
    allKeys: ['duplicate', 'label'],
    name: 'label',
    error: 'Workspace already has a deployment with that name.',
  },
  {
    key: 'permissions',
    name: 'permissions',
    error: 'Contact your Workspace Admin to upgrade your permissions.',
  },
  {
    key: 'trial',
    name: 'label',
    error:
      'Your workspace is in trial mode. Enter a payment method to create multiple Airflow deployments.',
  },
]

export const handleError = error => formErrors({ error, errors })

export const trimError = error => error.split(':')[1].trim()
