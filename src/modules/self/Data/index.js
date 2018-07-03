'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import api from './api'

import { Query } from 'instruments'

const Data = Component => {
  const Data = ({ skip, ...props }) => {
    return (
      <Query gql={api.Self} skip={skip}>
        {({ data: { user } }) => {
          const newProps = {
            ...props,
            user,
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
