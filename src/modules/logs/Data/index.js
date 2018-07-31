'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import api from './api'

import { Query } from 'instruments'

const Data = Component => {
  const Data = ({ skip, ...props }) => {
    return (
      <Query
        gql={api.Logs}
        skip={skip}
        subscribe={{
          gql: api.SubscribeLogs,
          vars: null,
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
  }

  return Data
}

export default Data
