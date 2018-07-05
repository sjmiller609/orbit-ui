'use strict'
import React from 'react'
import api from './api'

import { Mutation } from 'instruments'

const Update = Component => {
  const Update = props => {
    return (
      <Mutation
        gql={api.UpdateUser}
        success="User access permissions updated."
        track="User Permissions Updated"
        back>
        {({ mutate }) => {
          const newProps = {
            ...props,
            onSubmit: vars => {
              mutate({
                variables: vars,
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
