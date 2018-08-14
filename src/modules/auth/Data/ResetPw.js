'use strict'
import React from 'react'
import api from './api'

import { Mutation } from 'instruments'

const Resend = Component => {
  const Resend = props => {
    return (
      <Mutation
        gql={api.ResendConfirmation}
        success="Email sent."
        track="User Resends Confirmation">
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

  return Resend
}

export default Resend
