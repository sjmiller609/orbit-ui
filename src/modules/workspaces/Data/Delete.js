'use strict'
import React from 'react'
import api from './api'

import { Delete as Mutate, CardError } from 'instruments'

import { handleError, trimError } from './helpers'

const Delete = Component => {
  const Delete = props => {
    const query = {
      name: api.Workspaces,
      type: 'workspaces',
      vars: {
        withUsers: false,
      },
    }
    return (
      <Mutate
        gql={api.DeleteWorkspace}
        redirect="/workspaces"
        success="Workspace deleted successfully."
        track="Workspace Deleted"
        query={query}
        errorMsg={trimError}
        voidError>
        {({ mutate, error }) => {
          const newProps = {
            ...props,
            onSubmit: vars => {
              mutate({
                variables: vars,
                refetchQueries: [{ query: query.name, variables: query.vars }],
              })
            },
          }
          // handle api errors
          const err = handleError(error)
          if (err) newProps.error = err
          else if (error) return <CardError />
          return <Component {...newProps} />
        }}
      </Mutate>
    )
  }

  return Delete
}

export default Delete
