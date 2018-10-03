'use strict'
import React from 'react'
import PropTypes from 'prop-types'

import api from './api'
import workspacesApi from 'modules/workspaces/Data/api'

import { Delete as Mutate, GetData } from 'instruments'

const DeleteInvite = Component => {
  const DeleteInvite = ({ getData, ...props }) => {
    const query = {
      name: workspacesApi.Workspaces,
      type: 'workspaces',
      vars: {
        workspaceId: getData.workspaceId,
        withUsers: true,
      },
    }
    return (
      <Mutate
        gql={api.DeleteInvite}
        redirect={'/users'}
        success="Invitation canceled."
        track="Invite Deleted From Workspace"
        query={query}>
        {({ mutate }) => {
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
          return <Component {...newProps} />
        }}
      </Mutate>
    )
  }
  DeleteInvite.propTypes = {
    getData: PropTypes.object,
  }

  return GetData(DeleteInvite, { workspaceId: true })
}

export default DeleteInvite
