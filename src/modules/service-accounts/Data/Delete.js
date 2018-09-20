'use strict'
import React from 'react'
import PropTypes from 'prop-types'

import api from './api'

import { Delete as Mutate, GetData } from 'instruments'
import { getVars } from './helpers'

const Delete = Component => {
  const Delete = ({ getData, ...props }) => {
    const variables = getVars({ deploymentId: props.deploymentId, getData })

    const query = {
      name: api.ServiceAccounts,
      type: 'serviceAccounts',
      vars: variables,
    }
    return (
      <Mutate
        gql={api.DeleteServiceAccount}
        //  redirect={!isSelf ? '/users' : '/workspaces'}
        success={
          'Service account deleted from ' + props.deploymentId
            ? 'deployment'
            : 'workspace'
        }
        track={
          'Service Account Deleted From ' + props.deploymentId
            ? 'Deployment'
            : 'Workspace'
        }
        query={query}>
        {({ mutate }) => {
          const newProps = {
            ...props,
            onSubmit: vars => {
              mutate({
                variables: {
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
  Delete.propTypes = {
    getData: PropTypes.object,
    deploymentId: PropTypes.string,
  }

  return GetData(Delete, { workspaceId: true })
}

export default Delete
