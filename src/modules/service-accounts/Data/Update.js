'use strict'
import React from 'react'
import api from './api'

import { Mutation, CardError } from 'instruments'

import { handleError, trimError } from './helpers'

const Update = Component => {
  const Update = props => {
    return (
      <Mutation
        gql={api.UpdateServiceAccount}
        success="Service account updated."
        track="Service Account Updated"
        errorMsg={trimError}
        voidError>
        {({ mutate, error }) => {
          const newProps = {
            ...props,
            onSubmit: vars => {
              const { id: serviceAccountId, ...payload } = vars
              const variables = {
                serviceAccountId,
                payload,
              }
              const query = {
                name: api.ServiceAccounts,
                type: 'serviceAccounts',
                vars,
              }
              mutate({
                variables,
                refetchQueries: [
                  {
                    query: query.name,
                    variables: query.vars,
                  },
                ],
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
