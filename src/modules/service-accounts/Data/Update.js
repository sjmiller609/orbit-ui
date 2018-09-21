'use strict'
import React from 'react'
import api from './api'

import { Mutation } from 'instruments'

const Update = Component => {
  const Update = props => {
    return (
      <Mutation
        gql={api.UpdateServiceAccount}
        success="Service account updated."
        track="Service Account Updated">
        {({ mutate }) => {
          const newProps = {
            ...props,
            onSubmit: vars => {
              const { id, ...payload } = vars
              const variables = {
                id,
                payload,
              }
              mutate({
                variables,
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
