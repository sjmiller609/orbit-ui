'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import api from './api'

import { Query, GetData } from 'instruments'

const Data = Component => {
  const Data = ({ configVars, skip, getData, ...otherProps }) => {
    const vars = {
      ...configVars,
      workspaceId: getData.workspaceId,
    }
    return (
      <Query
        gql={api.DeploymentConfig}
        vars={vars}
        skip={skip}
        fetchPolicy="network-only">
        {({ data: { deploymentConfig }, refetch }) => {
          const newProps = {
            ...otherProps,
            refetch,
            deploymentConfig,
          }
          return <Component {...newProps} />
        }}
      </Query>
    )
  }

  Data.propTypes = {
    configVars: PropTypes.object,
    getData: PropTypes.object,
    skip: PropTypes.bool,
  }

  return GetData(Data, { workspaceId: true })
}

export default Data
