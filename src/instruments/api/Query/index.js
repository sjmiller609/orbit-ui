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

        // remove property `Symbol(id)` from data, as it breaks react dev tools
        const data2 = {}
        Object.keys(data).forEach(k => {
          data2[k] = data[k]
        })

        return children({ data: data2 }) || null
      }}
    </Apollo>
  )
}

Query.propTypes = {
  gql: PropTypes.object,
  children: PropTypes.func.isRequired,
  vars: PropTypes.object,
  skip: PropTypes.bool,
}

export default Query
