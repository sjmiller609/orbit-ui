'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import api from './api'

import { Query, Redirect } from 'instruments'

const onError = <Redirect to="/logout/silent" />

const Data = Component => {
  const Data = ({ skip, ...props }) => {
    return (
      <Query gql={api.Self} skip={skip} onError={onError}>
        {({ data: { self } }) => {
          if (!self) return onError // invalid token protection
          const newProps = {
            ...props,
            self,
          }
          return <Component {...newProps} />
        }}
      </Query>
    )
  }

  Data.propTypes = {
    skip: PropTypes.bool,
  }

  return Data
}

export default Data
