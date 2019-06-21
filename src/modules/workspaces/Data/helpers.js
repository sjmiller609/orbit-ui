import { formErrors } from 'instruments'

const errors = [
  {
    key: 'permissions',
    name: 'permissions',
    error: 'Contact your Workspace Admin to upgrade your permissions.',
  },
  {
    key: 'test mode',
    name: 'test mode',
    error:
      'Your card was declined. Your request was in test mode, but used a non test (live) card.',
  },
  {
    key: 'Invalid email address',
    name: 'billingEmail',
    error:
      "That email doesn't look right. Please try with a valid email address.",
  },
]

export const handleError = error => formErrors({ error, errors })

export const trimError = error => error.split(':')[1].trim()
