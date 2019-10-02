'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import api from './api'

import { Query, GetData } from 'instruments'
import { getVars } from './helpers'

const Data = Component => {
  const Data = ({
    vars,
    getData,
    fetchPolicy,
    skip,
    search,
    ...otherProps
  }) => {
    const variables = getVars({
      deploymentId: otherProps.deploymentId,
      vars,
      getData,
    })

    const queryVars = {
      deploymentId: variables.deploymentId,
      entityType: variables.entityType,
      entityUuid: variables.entityId,
      serviceAccountUuid: variables.serviceAccountId,
      workspaceId: variables.workspaceId,
    }
    return (
      <Query
        gql={api.ServiceAccounts}
        vars={queryVars}
        skip={skip}
        fetchPolicy={fetchPolicy}
        sortBy="lastUsedAt"
        search={search}>
        {({ data: { serviceAccounts } }) => {
          const newProps = {
            ...otherProps,
            search,
            serviceAccounts,
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
