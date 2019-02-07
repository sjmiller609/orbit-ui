'use strict'
import React from 'react'
import api from './api'

import { Mutation, CardError } from 'instruments'
import { handleError, trimError } from './helpers'
const Update = Component => {
  const Update = props => {
    return (
      <Mutation
        gql={api.UpdateDeployment}
        success="Deployment updated successfully."
        track="Deployment Updated"
        voidError
        errorMsg={trimError}
        back>
        {({ mutate, error }) => {
          const newProps = {
            ...props,
            onSubmit: vars => {
              const { id, config, env, ...payload } = vars

              const variables = {
                id,
                payload,
                config,
                env,
                sync: true,
              }
              mutate({
                variables,
              })
            },
          }
          // handle api errors
          const err = handleError(error)
          if (err) newProps.error = err
          else if (error) return <CardError />

          return <Component {...newProps} />
        }}
      </Mutation>
    )
  }

  return Update
}

export default Update
