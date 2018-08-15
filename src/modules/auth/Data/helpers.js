import React from 'react'

import { Link } from 'instruments'

export const errors = error => {
  if (!error) return
  const err = JSON.stringify(error).toLowerCase()

  // incorrect password
  if (~err.indexOf('password incorrect')) {
    return {
      name: 'password',
      error: 'Incorrect password',
    }
    // email doesn't exist
  } else if (~err.indexOf('not found')) {
    return {
      name: 'email',
      error: "Hmm, we can't find that email",
    }
    // email taken
  } else if (~err.indexOf('email already in use')) {
    return {
      name: 'email',
      error: 'That email is already taken.',
    }
    // oauth user tries to login with password
  } else if (~err.indexOf('no password credentials found')) {
    return {
      name: 'email',
      error: 'No password found. Did you mean to login with OAuth?',
    }
  } else if (~err.indexOf('awaiting email confirmation')) {
    return {
      name: 'email',
      error: (
        <Link to="/resend">
          Your email is not yet verified. Please check your email for a
          verification link.<br /> [Click to resend]
        </Link>
      ),
    }
  }
}
