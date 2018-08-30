'use strict'
import React from 'react'
import api from './api'

import { Mutation } from 'instruments'

const Update = Component => {
  const Update = props => {
    return (
      <Mutation
        gql={api.UpdateDeployment}
        success="Deployment updated successfully."
        track="Deployment Updated"
        back>
        {({ mutate }) => {
          const newProps = {
            ...props,
            onSubmit: vars => {
              const { id, ...payload } = vars
              console.log(payload)
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
