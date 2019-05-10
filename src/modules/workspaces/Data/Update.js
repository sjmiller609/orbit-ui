'use strict'
import React from 'react'
import api from './api'

import { Mutation, CardError } from 'instruments'

import { handleError } from './helpers'

const Update = Component => {
  const Update = props => {
    return (
      <Mutation
        gql={api.UpdateWorkspace}
        success="Workspace updated successfully."
        track="Workspace Updated">
        {({ mutate, errors }) => {
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
          // handle api errors
          console.log(error)
          const err = handleError(error)
          console.log(err)
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
