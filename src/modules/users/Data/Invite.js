'use strict'
import React from 'react'
import PropTypes from 'prop-types'

import workspacesApi from 'modules/workspaces/Data/api'
import api from './api'

import { Create as Mutation, GetData } from 'instruments'

const Invite = Component => {
  const Invite = ({ getData, ...props }) => {
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
        gql={api.InviteUser}
        back
        errorMsg="Limited functionality: To add a user to this workspace, that person must first sign up."
        success="Your invitation has been sent"
        track="New User Invited to Workspace"
        query={query}>
        {({ mutate }) => {
          const newProps = {
            ...props,
            onSubmit: vars => {
              mutate({
                variables: {
                  workspaceId: getData.workspaceId,
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
  Invite.propTypes = {
    getData: PropTypes.object,
  }

  return GetData(Invite, { workspaceId: true })
}

export default Invite
