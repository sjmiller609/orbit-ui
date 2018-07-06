'use strict'
import React from 'react'
import api from './api'

import { Delete as Mutate } from 'instruments'

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
        query={query}>
        {({ mutate }) => {
          const newProps = {
            ...props,
            onSubmit: vars => {
              mutate({
                variables: vars,
                refetchQueries: [{ query: query.name, variables: query.vars }],
              })
            },
          }
          return <Component {...newProps} />
        }}
      </Mutate>
    )
  }

  return Delete
}

export default Delete
