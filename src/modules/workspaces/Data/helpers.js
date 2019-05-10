import { formErrors } from 'instruments'

const errors = [
  {
    key: 'permissions',
    name: 'permissions', //note: this doesn't actually do anything at the moment other than logging the error out in the client when the mutation runs.
    error:
      'You do not have the appropriate permissions for that. Contact your Workspace Admin to change your role.',
  },
]

export const handleError = error => formErrors({ error, errors })

export const trimError = error => error.split(':')[1].trim()
