'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import api from './api'

import { Query } from 'instruments'

const Data = Component => {
  const Data = ({ skip, search, ...props }) => {
    return (
      <Query
        gql={api.Logs}
        skip={skip}
        search={search}
        sortNewest={false}
        subscribe={{
          gql: api.SubscribeLogs,
          vars: null,
        }}>
        {({ data: { logs }, subscribeToMore }) => {
          const newProps = {
            ...props,
            logs,
            search,
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
  }

  return Data
}

export default Data
