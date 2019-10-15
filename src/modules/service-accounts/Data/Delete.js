'use strict'
import React from 'react'
import PropTypes from 'prop-types'

import api from './api'
import { isWorkspace } from 'helpers/compare'

import { Delete as Mutate, GetData, CardError } from 'instruments'
import { handleError, trimError } from './helpers'

const Delete = Component => {
  const Delete = ({ getData, path, ...props }) => {
    const variables = {
      serviceAccountUuid: props.serviceAccount.id, // eslint-disable-line
      deploymentUuid: props.deploymentId, // eslint-disable-line
      workspaceUuid: (getData && getData.workspaceId) || undefined,
    }

    const query = {
      name: isWorkspace(variables)
        ? api.WorkspaceServiceAccount
        : api.DeploymentServiceAccount,
      type: 'serviceAccounts',
      vars: variables,
    }

    return (
      <Mutate
        gql={
          isWorkspace(variables)
            ? api.DeleteWorkspaceServiceAccount
            : api.DeleteDeploymentServiceAccount
        }
        redirect={path}
        success={
          'Service account deleted from this ' +
          (props.deploymentId ? 'deployment' : 'workspace')
        }
        track={
          'Service Account Deleted From ' +
          (props.deploymentId ? 'Deployment' : 'Workspace')
        }
        query={query}
        errorMsg={trimError}
        voidError>
        {({ mutate, error }) => {
          const newProps = {
            ...props,
            onSubmit: vars => {
              mutate({
                variables: {
                  ...variables,
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
  Delete.propTypes = {
    getData: PropTypes.object,
    deploymentId: PropTypes.string,
    path: PropTypes.string,
  }

  return GetData(Delete, { workspaceId: true })
}

export default Delete
