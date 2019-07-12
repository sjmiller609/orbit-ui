'use strict'
import React from 'react'
import api from './api'
import { reduce, isEqual } from 'lodash'

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
              const { id, config, env } = vars
              let { ...payload } = vars

              // Find and return diff between previous config and new config
              const diff = reduce(
                payload,
                (result, value, key) => {
                  return isEqual(value, props.deployment[key]) // eslint-disable-line
                    ? result
                    : result.concat({ [key]: value })
                },
                []
              )

              // Filter out reiterated payload values (not to be used in "payload")
              const newPayload = diff.filter(d => {
                for (let key in d) {
                  if (
                    key != 'id' &&
                    key != 'config' &&
                    key != 'env' &&
                    key != 'properties'
                  )
                    return d
                }
              })

              // Update the payload w/ only the values the user is changing
              payload = newPayload[0]

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
