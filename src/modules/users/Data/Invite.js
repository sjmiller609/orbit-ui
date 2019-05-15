'use strict'
import React from 'react'
import PropTypes from 'prop-types'

import workspacesApi from 'modules/workspaces/Data/api'
import api from './api'

import { Create as Mutation, GetData, CardError } from 'instruments'

import { handleError, trimError } from './helpers'

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
        success="Your invitation has been sent."
        track="New User Invited to Workspace"
        query={query}
        errorMsg={trimError}
        voidError>
        {({ mutate, error }) => {
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
          // handle api errors
          const err = handleError(error)
          if (err) newProps.error = err
          else if (error) return <CardError />
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
