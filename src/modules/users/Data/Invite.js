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

    const platformQuery = {
      vars: {
        withUsers: false,
      },
    }

    return (
      <Mutation
        gql={props.admin ? api.InviteUserToPlatform : api.InviteUser}
        back
        success="Your invitation has been sent."
        track={
          props.admin
            ? 'New User Invited to Platform'
            : 'New User Invited to Workspace'
        }
        query={props.admin ? platformQuery : query}
        errorMsg={trimError}
        voidError>
        {({ mutate, error }) => {
          const newProps = {
            ...props,
            onSubmit: vars => {
              mutate({
                variables: {
                  workspaceId: props.admin ? null : getData.workspaceId,
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
    admin: PropTypes.bool,
  }

  return GetData(Invite, { workspaceId: true })
}

export default Invite
