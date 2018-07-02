'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import api from './api'

import { Query } from 'instruments'

const Data = Component => {
  const Data = ({ vars, ...otherProps }) => {
    return (
      <Query gql={api.AuthConfig} vars={vars}>
        {({ data: { deployments } }) => {
          const newProps = {
            ...otherProps,
            deployments,
          }
          return <Component {...newProps} />
        }}
      </Query>
    )
  }

  Data.propTypes = {
    vars: PropTypes.object,
  }

  return Data
}

export default Data
