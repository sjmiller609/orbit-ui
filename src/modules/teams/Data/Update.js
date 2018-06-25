'use strict'
import React from 'react'
import api from './api'

import { Mutation } from 'instruments'

const Update = Component => {
  const Update = props => {
    return (
      <Mutation
        gql={api.UpdateTeam}
        success="Team updated successfully."
        track="Team Updated">
        {({ mutate }) => {
          const newProps = {
            ...props,
            onSubmit: vars => {
              // updateTeam takes vars inside Payload: JSON
              mutate({
                variables: {
                  id: vars.id,
                  payload: vars,
                },
              })
            },
          }
          return <Component {...newProps} />
        }}
      </Mutation>
    )
  }

  return Update
}

export default Update
