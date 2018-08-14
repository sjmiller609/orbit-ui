'use strict'
import React from 'react'
import api from './api'

import { Mutation } from 'instruments'

const ForgotPw = Component => {
  const ForgotPw = props => {
    return (
      <Mutation
        gql={api.ForgotPassword}
        success="Email sent."
        voidError
        redirect="/forgot-password/sent"
        track="User Forgot Password">
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
          if (error) {
            const err = JSON.stringify(error).toLowerCase()
            // Email doesn't exist
            if (~err.indexOf('not found')) {
              newProps.error = {
                name: 'email',
                error: "Hmm, we can't find that email",
              }
            }
          }
          return <Component {...newProps} />
        }}
      </Mutation>
    )
  }

  return ForgotPw
}

export default ForgotPw
