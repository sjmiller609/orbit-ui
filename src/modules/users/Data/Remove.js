'use strict'
import React from 'react'
import PropTypes from 'prop-types'

import api from './api'
import workspacesApi from 'modules/workspaces/Data/api'

import { Delete as Mutate, GetData } from 'instruments'

const Remove = Component => {
  const Remove = ({ getData, ...props }) => {
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
        gql={api.RemoveUser}
        redirect="/users"
        success="User removed from workspace."
        track="User Removed From Workspace"
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
  Remove.propTypes = {
    getData: PropTypes.object,
  }

  return GetData(Remove, { workspaceId: true })
}

export default Remove
