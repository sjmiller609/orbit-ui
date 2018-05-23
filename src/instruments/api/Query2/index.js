'use strict'
import React from 'react'
import PropTypes from 'prop-types'

import { graphql } from 'react-apollo'
// import { Loading } from '../../../instruments'

// TODO: Add error handling
const Query1 = (Component, gql) => {
  const Query1 = props => {
    return <Component {...props} />
  }

  Query1.propTypes = {
    gql: PropTypes.object,
    vars: PropTypes.object,
    skip: PropTypes.bool,
  }

  return graphql(gql, {
    options: props => ({
      variables: props.vars,
    }),
  })(Query1)
}

export default Query1
