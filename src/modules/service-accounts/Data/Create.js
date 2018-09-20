'use strict'
import React from 'react'
import PropTypes from 'prop-types'

import api from './api'

import { Create as Mutation, GetData } from 'instruments'
import { getVars } from './helpers'

const Create = Component => {
  const Create = ({ getData, deploymentId, ...props }) => {
    const variables = getVars({ deploymentId, getData })
    const query = {
      name: api.ServiceAccounts,
      type: 'serviceAccounts',
      vars: variables,
    }
    return (
      <Mutation
        gql={api.CreateServiceAccount}
        back
        success="New service account created. The API key will only be visible this session"
        track={
          'New Service Account Created For ' + deploymentId
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
                  ...variables,
                  ...vars,
                },
              })
            },
          }
          return <Component {...newProps} />
        }}
      </Mutation>
    )
  }
  Create.propTypes = {
    getData: PropTypes.object,
    deploymentId: PropTypes.string,
  }

  return GetData(Create, { workspaceId: true })
}

export default Create
