'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import api from './api'

import { Query } from 'instruments'

const Data = Component => {
  const Data = ({ skip, OnError, ...props }) => {
    return (
      <Query gql={api.Self} skip={skip} OnError={OnError}>
        {({ data: { self } }) => {
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
    OnError: PropTypes.element,
  }

  return Data
}

export default Data
