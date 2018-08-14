'use strict'
import React from 'react'
import api from './api'

import { Mutation, Redirect } from 'instruments'

const Verify = Component => {
  const Verify = props => {
    return (
      <Mutation
        gql={api.VerifyEmail}
        success="Email successfuly verified"
        errorMsg="Your confirmation token is not valid"
        OnError={<Redirect to="/" />}
        track="User Verfies Email">
        {({ mutate }) => {
          const newProps = {
            ...props,
            onSubmit: vars => {
              mutate({
                variables: {
                  duration: 7, // set to max days
                  ...vars,
                },
              })
            },
          }
          return <Component {...newProps} />
        }}
      </Mutation>
    )
  }

  return Verify
}

export default Verify
