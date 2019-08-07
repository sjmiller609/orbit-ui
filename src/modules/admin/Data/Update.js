'use strict'
import React from 'react'
import api from './api'

import { Mutation } from 'instruments'

const Update = Component => {
  const Update = props => {
    return (
      <Mutation
        gql={api.UpdateSelf}
        success="Profile updated successfully."
        track="User Profile Updated">
        {({ mutate }) => {
          const newProps = {
            ...props,
            onSubmit: vars => {
              mutate({
                variables: {
                  payload: vars,
                },
              })
            },
          }
          return <Component {...newProps} />
        }}
      </Mutation>
    )
  }

  return Update
}

export default Update
