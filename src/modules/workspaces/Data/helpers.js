import { formErrors } from 'instruments'

const errors = [
  {
    key: 'You do not have the appropriate permissions for that',
    name: 'label',
    error:
      'You do not have the appropriate permissions for that. Contact your Workspace Admin to change your role.',
  },
]

export const handleError = error => formErrors({ error, errors })

export const trimError = error => error.split(':')[1].trim()
