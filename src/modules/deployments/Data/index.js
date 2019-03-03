'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import api from './api'

import { Query } from 'instruments'

const Data = Component => {
  const Data = ({ vars, skip, search, ...otherProps }) => {
    return (
      <Query gql={api.DeploymentConfig}>
        {({
          data: {
            deploymentConfig: { latestVersion, loggingEnabled },
          },
        }) => (
          <Query gql={api.Deployments} vars={vars} skip={skip} search={search}>
            {({ data: { deployments } }) => {
              const newProps = {
                ...otherProps,
                search,
                deployments,
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
  }

  return Data
}

export default Data
