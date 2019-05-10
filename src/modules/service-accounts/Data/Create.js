'use strict'
import React from 'react'
import PropTypes from 'prop-types'

import api from './api'

import { Create as Mutation, GetData, CardError } from 'instruments'
import { getVars, handleError, trimError } from './helpers'

const Create = Component => {
  const Create = ({ getData, path, ...props }) => {
    const variables = getVars({ deploymentId: props.deploymentId, getData })
    const query = {
      name: api.ServiceAccounts,
      type: 'serviceAccounts',
      vars: variables,
    }
    return (
      <Mutation
        gql={api.CreateServiceAccount}
        redirect={data => ({
          pathname: path + '/' + data.id,
          state: { apiKey: data.apiKey },
        })}
        success="New service account created. IMPORTANT: The API key will only be visible during this session."
        track={
          'New Service Account Created For ' + props.deploymentId
            ? 'Deployment'
            : 'Workspace'
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
  Create.propTypes = {
    getData: PropTypes.object,
    deploymentId: PropTypes.string,
    path: PropTypes.string,
  }

  return GetData(Create, { workspaceId: true })
}

export default Create
