'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import api from './api'

import { Query } from 'instruments'
import OnError from '../OnError'

const Data = Component => {
  const Data = ({ vars, skip, search, ...otherProps }) => {
    const vars2 = {
      ...vars,
      withUsers: (vars && vars.withUsers) || false,
    }

    return (
      <Query
        gql={api.Teams}
        vars={vars2}
        skip={skip}
        search={search}
        onError={<OnError />}>
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
