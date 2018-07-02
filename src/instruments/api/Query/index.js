'use strict'
import React from 'react'
import PropTypes from 'prop-types'

import { Query as Apollo } from 'react-apollo'
import { Loading, CardError } from 'instruments'

import { searchText } from './helpers'

const Query = ({ gql, vars, skip, children, search }) => {
  return (
    <Apollo query={gql} variables={vars} skip={skip} errorPolicy="all">
      {({ loading, error, data }) => {
        if (loading) return <Loading /> // return this instead of updating contextUI
        if (error) return <CardError />

        // remove property `Symbol(id)` from data, as it breaks react dev tools
        const data2 = {}
        Object.keys(data).forEach(k => {
          if (!data[k]) return null

          if (Array.isArray(data[k])) {
            // then make a shallow copy and order by date if it has that property
            data2[k] = data[k].slice(0)
            if (data[k].length > 1 && data[k][0].createdAt) {
              data2[k].sort((a, b) => {
                const a1 = new Date(a.updatedAt || a.createdAt).getTime()
                const b1 = new Date(b.updatedAt || b.createdAt).getTime()
                return b1 - a1
              })
            }
          } else {
            data2[k] = {
              ...data[k],
            }
          }
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
