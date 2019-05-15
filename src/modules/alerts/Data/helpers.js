import { formErrors } from 'instruments'

const errors = [
  {
    key: 'permissions',
    name: 'properties.alert_emails',
    error: 'You must be an admin to change these settings.',
  },
]

export const handleError = error => formErrors({ error, errors })

export const trimError = error => error.split(':')[1].trim()
