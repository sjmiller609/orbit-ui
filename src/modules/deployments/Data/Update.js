'use strict'
import React from 'react'
import api from './api'

import { Mutation } from 'instruments'
import { handleError, trimError } from './helpers'
const Update = Component => {
  const Update = props => {
    return (
      <Mutation
        gql={api.UpdateDeployment}
        success="Deployment updated successfully."
        track="Deployment Updated"
        voidError
        errorMsg={trimError}>
        {({ mutate, error }) => {
          const newProps = {
            ...props,
            onSubmit: vars => {
              const { id, config, env } = vars
              let { ...payload } = vars

              // Don't send the `images` field in the payload
              if (payload.config && payload.config.images)
                delete payload.config.images

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

          return <Component {...newProps} />
        }}
      </Mutation>
    )
  }

  return Update
}

export default Update
