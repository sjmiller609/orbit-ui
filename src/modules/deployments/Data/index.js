'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import api from './api'

import { Query } from '../../../instruments'

const Data = Component => {
  const Data = ({ vars, skip, ...otherProps }) => {
    return (
      <Query gql={api.Deployments} vars={vars} skip={skip}>
        {({ data }) => {
          const newProps = {
            ...otherProps,
            data,
          }
          console.log(newProps)
          return <Component {...newProps} />
        }}
      </Query>
    )
  }

  Data.propTypes = {
    vars: PropTypes.object,
    skip: PropTypes.bool,
  }

  return Data
}

export default Data
