'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import api from './api'

import { Query, GetData } from 'instruments'

const Data = Component => {
  const Data = ({
    vars,
    getData,
    deploymentId,
    skip,
    search,
    ...otherProps
  }) => {
    const variables = deploymentId
      ? {
          entityType: 'DEPLOYMENT',
          entityId: deploymentId,
          ...vars,
        }
      : {
          entityType: 'WORKSPACE',
          entityId: getData.workspaceId,
          ...vars,
        }
    return (
      <Query
        gql={api.ServiceAccounts}
        vars={variables}
        skip={skip}
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
  }

  return GetData(Data, { workspaceId: true })
}

export default Data
