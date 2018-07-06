'use strict'
import React from 'react'
import api from './api'

import { Create as Mutation } from 'instruments'

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
        {({ mutate }) => {
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
          return <Component {...newProps} />
        }}
      </Mutation>
    )
  }

  return Create
}

export default Create
