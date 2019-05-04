'use strict'
import React from 'react'
import api from './api'

import { Mutation } from 'instruments'

const Update = Component => {
  const Update = props => {
    return (
      <Mutation
        gql={api.UpdateWorkspace}
        success="Workspace updated successfully."
        track="Workspace Updated">
        {({ mutate }) => {
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
          console.log(vars)
          return <Component {...newProps} />
        }}
      </Mutation>
    )
  }

  return Update
}

export default Update
