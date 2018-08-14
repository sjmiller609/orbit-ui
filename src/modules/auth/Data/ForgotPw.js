'use strict'
import React from 'react'
import api from './api'
import { errors } from './helpers'

import { Mutation } from 'instruments'

const ForgotPw = Component => {
  const ForgotPw = props => {
    return (
      <Mutation
        gql={api.ForgotPassword}
        success="Email sent"
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
          const err = errors(error)
          if (err) newProps.error = err

          return <Component {...newProps} />
        }}
      </Mutation>
    )
  }

  return ForgotPw
}

export default ForgotPw
