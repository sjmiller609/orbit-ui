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
]

export const handleError = error => formErrors({ error, errors })

export const trimError = error => error.split(':')[1].trim()
