import React from 'react'

import { formErrors, Link } from 'instruments'

const errors = [
  {
    key: 'invalid password',
    name: 'password',
    error: 'Incorrect password',
  },
  {
    key: 'not found',
    name: 'email',
    error: "Hmm, we can't find that email",
  },
  {
    key: 'email already in use',
    name: 'email',
    error: 'That email is already taken.',
  },
  {
    key: 'no password credentials found',
    name: 'email',
    error: 'No password found. Did you mean to login with OAuth?',
  },
  {
    key: 'awaiting email confirmation',
    name: 'email',
    error: (
      <Link to="/resend">
        Your email is not yet verified. Please check your email for a
        verification link.<br /> [Click to resend]
      </Link>
    ),
  },
  {
    key: 'not associated with the specified invite',
    name: 'email',
    error: 'The email you entered does not match your invitation.',
  },
  {
    key: 'permissions',
    name: 'permissions',
    error: 'Contact your Workspace Admin to upgrade your permissions.',
  },
  {
    key: 'Email address in use',
    name: 'email',
    error: (
      <Link to="/login">
        A user with that email address already exists. Click here to login.
      </Link>
    ),
  },
]

export const handleError = error => formErrors({ error, errors })
