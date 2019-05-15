'use strict'
import React from 'react'
import api from './api'

import { Create as Mutation, CardError } from 'instruments'

import { handleError } from './helpers'

const Create = Component => {
  const Create = props => {
    const query = {
      name: api.Workspaces,
      type: 'workspaces',
      vars: {
        withUsers: false,
      },
    }
    return (
      <Mutation
        gql={api.CreateWorkspace}
        redirect={data => '/workspaces/' + data.id}
        success="New workspace created successfully."
        track="New Workspace Created"
        query={query}>
        {({ mutate, error }) => {
          const newProps = {
            ...props,
            onSubmit: vars => {
              mutate({
                variables: {
                  ...vars,
                },
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

  return Create
}

export default Create
