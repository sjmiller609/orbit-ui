'use strict'
import React from 'react'
import PropTypes from 'prop-types'

import { Query as Apollo } from 'react-apollo'
import { Loading } from '../../../instruments'

import { searchText } from './helpers'

const Query = ({ gql, vars, skip, children, search }) => {
  return (
    <Apollo query={gql} variables={vars} skip={skip}>
      {({ loading, error, data }) => {
        if (loading) return <Loading />

        // TODO: Error handling
        if (error) return console.log(`Error! ${error.message}`)

        // remove property `Symbol(id)` from data, as it breaks react dev tools
        const data2 = {}
        Object.keys(data).forEach(k => {
          data2[k] = data[k]
        })

        let data3
        if (search && search.text) {
          data3 = {}
          // NOTE: Filter search - putting in query so that can be hooked up to pagination or searching API later
          Object.keys(data2).forEach(k => {
            // filter out results that don't match - searches entire record
            // TODO: add 'fields' property to search object, to specifiy which fields to search
            data3[k] = data2[k].filter(d =>
              searchText(search.text, JSON.stringify(d))
            )
          })
        }

        return children({ data: data3 || data2 }) || null
      }}
    </Apollo>
  )
}

Query.propTypes = {
  gql: PropTypes.object,
  children: PropTypes.func.isRequired,
  vars: PropTypes.object,
  skip: PropTypes.bool,
  search: PropTypes.object,
}

export default Query
