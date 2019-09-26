'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import api from './api'

import { GetData, Query } from 'instruments'

const Data = Component => {
  const Data = ({
    vars,
    getData,
    workspaceId,
    skip,
    search,
    ...otherProps
  }) => {
    const extendedVars = {
      ...vars,
      workspaceId: getData.workspaceId || vars.workspaceId || workspaceId,
    }
    return (
      <Query gql={api.DeploymentConfig}>
        {({
          data: {
            deploymentConfig: { latestVersion, loggingEnabled },
          },
        }) => (
          <Query
            gql={api.Deployments}
            vars={extendedVars}
            skip={skip}
            search={search}>
            {({ data: { workspaceDeployments } }) => {
              const newProps = {
                ...otherProps,
                search,
                deployments: workspaceDeployments,
                latestVersion,
                loggingEnabled,
              }
              return <Component {...newProps} />
            }}
          </Query>
        )}
      </Query>
    )
  }

  Data.propTypes = {
    vars: PropTypes.object,
    skip: PropTypes.bool,
    search: PropTypes.object,
    getData: PropTypes.object,
    workspaceId: PropTypes.string,
  }

  return GetData(Data, { workspaceId: true })
}

export default Data
