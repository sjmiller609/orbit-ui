'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import api from './api'

import { Query } from 'instruments'

const Data = Component => {
  const Data = ({ skip, ...props }) => {
    const vars2 = {
      deploymentUuid: props.deploymentUuid,
      component: props.component,
      timestamp: props.since.get,
      search: props.search.text,
    }

    return (
      <Query
        gql={api.Logs}
        skip={skip}
        vars={vars2}
        sortNewest={false}
        fetchPolicy="cache-and-network"
        subscribe={{
          gql: api.SubscribeLogs,
          vars: vars2,
        }}>
        {({ data: { logs }, subscribeToMore }) => {
          const newProps = {
            ...props,
            logs,
            subscribeToMore,
          }
          return <Component {...newProps} />
        }}
      </Query>
    )
  }

  Data.propTypes = {
    skip: PropTypes.bool,
    OnError: PropTypes.element,
    search: PropTypes.object,
    since: PropTypes.object,
    component: PropTypes.string,
    deploymentUuid: PropTypes.string,
  }

  return Data
}

export default Data
