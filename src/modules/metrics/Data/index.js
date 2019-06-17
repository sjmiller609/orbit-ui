'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import api from './api'

import { Subscribe } from 'instruments'

const Data = Component => {
  const Data = ({ ...props }) => {
    const vars = {
      deploymentUuid: props.deploymentUuid,
      step: props.since.getStep(),
      since: props.since.get(),
    }

    return (
      <Subscribe
        gql={api.Metrics}
        vars={vars}
        sortNewest={false}
        fetchPolicy="cache-and-network">
        {({ data, loading, subscribeToMore }) => {
          const newProps = {
            ...props,
            metrics: data ? data.metrics : {},
            loading,
            subscribeToMore,
          }
          return <Component {...newProps} />
        }}
      </Subscribe>
    )
  }

  Data.propTypes = {
    OnError: PropTypes.element,
    component: PropTypes.object,
    deploymentUuid: PropTypes.string,
    since: PropTypes.object,
    step: PropTypes.object,
  }

  return Data
}

export default Data
