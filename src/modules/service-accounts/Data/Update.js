'use strict'
import React from 'react'
import api from './api'
import { isWorkspace } from 'helpers/compare'

import { Mutation, CardError, GetData } from 'instruments'
import { handleError, trimError } from './helpers'

const Update = Component => {
  const Update = ({ getData, ...props }) => { // eslint-disable-line
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
      <Mutation
        gql={
          isWorkspace(variables)
            ? api.UpdateWorkspaceServiceAccount
            : api.UpdateDeploymentServiceAccount
        }
        success="Service account updated."
        track="Service Account Updated"
        errorMsg={trimError}
        voidError>
        {({ mutate, error }) => {
          const newProps = {
            ...props,
            onSubmit: vars => {
              const { ...payload } = vars
              mutate({
                variables: {
                  ...variables,
                  payload,
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
      </Mutation>
    )
  }

  return GetData(Update, { workspaceId: true })
}

export default Update
