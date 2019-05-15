'use strict'
import React from 'react'
import api from './api'

import { Delete as Mutate, CardError } from 'instruments'

import { handleError, trimError } from './helpers'

const Delete = Component => {
  const Delete = props => {
    const query = {
      name: api.Deployments,
      type: 'deployments',
    }
    return (
      <Mutate
        gql={api.DeleteDeployment}
        redirect="/deployments"
        success="Deployment deleted successfully."
        track="Deployment Deleted"
        query={query}
        errorMsg={trimError}>
        {({ mutate, error }) => {
          const newProps = {
            ...props,
            onSubmit: vars => {
              mutate({
                variables: vars,
                refetchQueries: [
                  {
                    query: query.name,
                    variables: vars.queryVars, // need to get workspaceId for deployments query
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
      </Mutate>
    )
  }

  return Delete
}

export default Delete
