import { formErrors } from 'instruments'

const errors = [
  {
    key: 'permissions',
    name: 'properties.alert_emails',
    error: 'Contact your workspace admin to upgrade your permissions.',
  },
]

export const handleError = error => formErrors({ error, errors })

export const trimError = error => error.split(':')[1].trim()
