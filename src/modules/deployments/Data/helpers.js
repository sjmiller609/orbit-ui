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
    key: 'The CeleryExecutor requires at least 2 AU',
    name: 'properties.astro_units',
    error:
      'The CeleryExecutor requires at least 2 AU. Please adjust your settings.',
  },
]

export const handleError = error => formErrors({ error, errors })
