'use strict'
import React from 'react'

import api from './api'
import workspacesApi from 'modules/workspaces/Data/api'

import { Mutation, CardError } from 'instruments'
import { handleError, trimError } from './helpers'

const Update = Component => {
  const Update = ({ ...props }) => {
    return (
      <Mutation
        gql={api.UpdateRole}
        success="User Role Updated"
        track="User Role Updated"
        errorMsg={trimError}
        voidError>
        {({ mutate, error }) => {
          const newProps = {
            ...props,
            onSubmit: vars => {
              const query = {
                name: workspacesApi.Workspaces,
                type: 'workspaces',
                vars: {
                  workspaceId: vars.workspaceId,
                  withUsers: true,
                },
              }
              mutate({
                variables: {
                  workspaceId: vars.workspaceId,
                  email: vars.email,
                  role: vars.role,
                },
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
