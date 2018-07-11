'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import api from './api'

import { Query, P } from 'instruments'

const OnError = <P>Service not available. Please try again later.</P>

const Data = Component => {
  const Data = ({ vars, ...otherProps }) => {
    return (
      <Query gql={api.AuthConfig} vars={vars} OnError={OnError}>
        {({ data: { authConfig } }) => {
          const newProps = {
            ...otherProps,
            authConfig,
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
