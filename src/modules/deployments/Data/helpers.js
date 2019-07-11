import React from 'react'
import { formErrors, Link } from 'instruments'

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
    error: (
      <Link to="/billing">
        Your Workspace is in trial mode. Enter your payment information to
        unlock the ability to create multiple Airflow deployments.
      </Link>
    ),
  },
]

export const handleError = error => formErrors({ error, errors })

export const trimError = error => error.split(':')[1].trim()
