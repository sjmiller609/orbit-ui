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
        track="User Forgot Password">
        {({ mutate }) => {
          const newProps = {
            ...props,
            onSubmit: vars => {
              mutate({
                variables: vars,
              })
            },
          }
          return <Component {...newProps} />
        }}
      </Mutation>
    )
  }

  return ForgotPw
}

export default ForgotPw
