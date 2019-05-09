'use strict'
import React from 'react'
import PropTypes from 'prop-types'

import workspacesApi from 'modules/workspaces/Data/api'
import api from './api'

import { Mutation, GetData } from 'instruments'
import { get } from 'http'
// import { AsyncResource } from 'async_hooks';

const UpdateRole = Component => {
  const UpdateRole = ({ getData, ...props }) => {
    const query = {
      name: workspacesApi.Workspaces,
      type: 'workspaces',
      vars: {
        workspaceId: getData.workspaceId,
        withUsers: true,
      },
    }
    return (
      <Mutation
        gql={api.UpdateRole}
        success="User Role Updated"
        track="User Role Updated"
        query={query}>
        {({ mutate }) => {
          const newProps = {
            ...props,
            workspaceId: getData.workspaceId,
            onSubmit: vars => {
              mutate({
                variables: {
                  workspaceId: getData.workspaceId,
                  email: vars.emails[0].address,
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
    getData: PropTypes.object,
  }

  return GetData(UpdateRole, { workspaceId: true })
}

export default UpdateRole
