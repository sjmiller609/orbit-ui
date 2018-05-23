'use strict'
import React from 'react'
import PropTypes from 'prop-types'

import { Query as Apollo } from 'react-apollo'
import { Loading } from '../../../instruments'

// TODO: Error handling

const Query = ({ gql, vars, skip, children }) => {
  return (
    <Apollo query={gql} variables={vars} skip={skip}>
      {({ loading, error, data }) => {
        if (loading) return <Loading />
        if (error) return console.log(`Error! ${error.message}`)

        return () => children(data)
      }}
    </Apollo>
  )
}

Query.propTypes = {
  gql: PropTypes.string,
  children: PropTypes.function.isRequired,
  vars: PropTypes.object,
  skip: PropTypes.bool,
}

export default Query
