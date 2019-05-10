'use strict'
import React from 'react'
import PropTypes from 'prop-types'

import api from './api'
import workspacesApi from 'modules/workspaces/Data/api'

import { Delete as Mutate, GetData, CardError } from 'instruments'

import { handleError } from './helpers'

const Remove = Component => {
  const Remove = ({ getData, isSelf, ...props }) => {
    const query = {
      name: workspacesApi.Workspaces,
      type: 'workspaces',
      vars: {
        workspaceId: getData.workspaceId,
        withUsers: true,
      },
    }
    // if removing self from workspace, is different redirect and refetch
    if (isSelf) query.vars = { withUsers: false }

    return (
      <Mutate
        gql={api.RemoveUser}
        redirect={!isSelf ? '/users' : '/workspaces'}
        success="User removed from workspace."
        track="User Removed From Workspace"
        query={query}>
        {({ mutate, error }) => {
          const newProps = {
            ...props,
            isSelf,
            onSubmit: vars => {
              mutate({
                variables: {
                  workspaceId: getData.workspaceId,
                  ...vars,
                },
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
  Remove.propTypes = {
    getData: PropTypes.object,
    isSelf: PropTypes.bool,
  }

  return GetData(Remove, { workspaceId: true })
}

export default Remove
