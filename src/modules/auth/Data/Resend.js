'use strict'
import React from 'react'
import api from './api'

import { Mutation } from 'instruments'
import { handleError } from './helpers'

const Resend = Component => {
  const Resend = props => {
    return (
      <Mutation
        gql={api.ResendConfirmation}
        success="Email sent. Check your inbox"
        voidError
        redirect="/confirm"
        track="User Resends Confirmation">
        {({ mutate, error }) => {
          const newProps = {
            ...props,
            onSubmit: vars => {
              mutate({
                variables: vars,
              })
            },
          }
          // handle api errors
          const err = handleError(error)
          if (err) newProps.error = err
          if (error && !err) {
            newProps.error = {
              name: 'email',
              error: 'That email is already verified.',
            }
          }

          return <Component {...newProps} />
        }}
      </Mutation>
    )
  }

  return Resend
}

export default Resend
