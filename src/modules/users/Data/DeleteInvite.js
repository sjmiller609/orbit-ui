'use strict'
import React from 'react'
import PropTypes from 'prop-types'

import api from './api'
import workspacesApi from 'modules/workspaces/Data/api'

import { Delete as Mutate, GetData, CardError } from 'instruments'
import { handleError, trimError } from './helpers'

const DeleteInvite = Component => {
  const DeleteInvite = ({ getData, admin, ...props }) => {
    const query = {
      name: workspacesApi.Workspaces,
      type: 'workspaces',
      vars: {
        workspaceId: getData.workspaceId,
        withUsers: true,
      },
    }

    let redirect = '/users'
    if (admin) redirect = '/admin/users'

    return (
      <Mutate
        gql={api.DeleteInvite}
        redirect={redirect}
        success="Invitation canceled."
        track="Invite Deleted From Workspace"
        query={query}
        errorMsg={trimError}
        voidError>
        {({ mutate, error }) => {
          const newProps = {
            ...props,
            onSubmit: vars => {
              mutate({
                variables: vars,
                refetchQueries: [
                  {
                    query: query.name,
                    variables: query.vars,
                  },
                ],
              })
            },
          }
          // handle api errors
          const err = handleError(error)
          if (err) newProps.error = err
          else if (error) return <CardError />
          return <Component {...newProps} />
        }}
      </Mutate>
    )
  }
  DeleteInvite.propTypes = {
    getData: PropTypes.object,
    admin: PropTypes.bool,
  }

  return GetData(DeleteInvite, { workspaceId: true })
}

export default DeleteInvite
