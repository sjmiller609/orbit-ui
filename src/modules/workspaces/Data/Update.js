'use strict'
import React from 'react'
import api from './api'

import { Mutation, CardError } from 'instruments'

import { handleError, trimError } from './helpers'

const Update = Component => {
  const Update = props => {
    return (
      <Mutation
        gql={api.UpdateWorkspace}
        success="Workspace updated successfully."
        track="Workspace Updated"
        errorMsg={trimError}
        voidError>
        {({ mutate, error }) => {
          const newProps = {
            ...props,
            onSubmit: vars => {
              // updateWorkspace takes vars inside Payload: JSON
              mutate({
                variables: {
                  id: vars.id,
                  payload: vars,
                },
              })
            },
          }
          // handle api error
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
