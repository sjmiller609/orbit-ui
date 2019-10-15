'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import api from './api'
import { isWorkspace } from 'helpers/compare'

import { Query, GetData } from 'instruments'

const Data = Component => {
  const Data = ({ getData, fetchPolicy, skip, search, ...otherProps }) => {
    const variables = {
      deploymentUuid: otherProps.deploymentId,
      workspaceUuid: (getData && getData.workspaceId) || undefined,
    }

    return (
      <Query
        gql={
          isWorkspace(variables)
            ? api.WorkspaceServiceAccounts
            : api.DeploymentServiceAccounts
        }
        vars={variables}
        skip={skip}
        fetchPolicy={fetchPolicy}
        sortBy="lastUsedAt"
        search={search}>
        {({
          data: { workspaceServiceAccounts, deploymentServiceAccounts },
        }) => {
          const newProps = {
            ...otherProps,
            search,
            serviceAccounts:
              workspaceServiceAccounts || deploymentServiceAccounts,
          }
          return <Component {...newProps} />
        }}
      </Query>
    )
  }

  Data.propTypes = {
    vars: PropTypes.object,
    skip: PropTypes.bool,
    search: PropTypes.object,
    getData: PropTypes.object,
    deploymentId: PropTypes.string,
    fetchPolicy: PropTypes.string,
  }

  return GetData(Data, { workspaceId: true })
}

export default Data
