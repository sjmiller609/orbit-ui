'use strict'
import React from 'react'
import PropTypes from 'prop-types'

import workspacesApi from 'modules/workspaces/Data/api'
import api from './api'

import { Mutation } from 'instruments'
// import { get } from 'http'
// import { AsyncResource } from 'async_hooks';

const UpdateRole = Component => {
  const UpdateRole = ({ ...props }) => {
    return (
      <Mutation
        gql={api.UpdateRole}
        success="User Role Updated"
        track="User Role Updated">
        {({ mutate }) => {
          const newProps = {
            ...props,
            onSubmit: vars => {
              mutate({
                variables: {
                  workspaceId: vars.workspaceId,
                  email: vars.email,
                  role: vars.role,
                },
              })
              props.role.set(vars.role)
              location.reload(true) // Current workaround for bug in the Select form
            },
          }
          return <Component {...newProps} />
        }}
      </Mutation>
    )
  }
  UpdateRole.propTypes = {
    role: PropTypes.object,
  }

  return UpdateRole
}

export default UpdateRole
