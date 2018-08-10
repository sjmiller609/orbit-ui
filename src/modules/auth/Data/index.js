'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import api from './api'

import { Query, CardError, P, B } from 'instruments'

const OnError = (
  <CardError>
    <P>
      <B>Service not available. Please try again later.</B>
    </P>
  </CardError>
)

const Data = Component => {
  const Data = ({ vars, ...otherProps }) => {
    const vars2 = {
      redirect: '/oauth',
      duration: 7, // set to max days
      ...vars,
    }
    return (
      <Query gql={api.AuthConfig} vars={vars2} OnError={OnError}>
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
