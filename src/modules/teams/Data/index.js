'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import api from './api'

import { Query } from 'instruments'

const Data = Component => {
  const Data = ({ vars, skip, search, ...otherProps }) => {
    return (
      <Query gql={api.Teams} vars={vars} skip={skip} search={search}>
        {({ data: { teams } }) => {
          const newProps = {
            ...otherProps,
            search,
            teams,
          }
          return <Component {...newProps} />
        }}
      </Query>
    )
  }

  Data.propTypes = {
    vars: PropTypes.object,
    skip: PropTypes.bool,
    search: PropTypes.object,
  }

  return Data
}

export default Data
