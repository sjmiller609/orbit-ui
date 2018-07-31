'use strict'
import React from 'react'
import PropTypes from 'prop-types'

import { Query as Apollo } from 'react-apollo'
import { Loading, CardError } from 'instruments'

import { searchText } from './helpers'

const Query = ({ gql, vars, skip, children, search, OnError, subscribe }) => {
  return (
    <Apollo query={gql} variables={vars} skip={skip} errorPolicy="all">
      {({ loading, error, data, subscribeToMore }) => {
        if (loading) return <Loading /> // return this instead of updating contextUI
        if (error) {
          if (OnError) return OnError
          return <CardError />
        }

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
            data3[k] = data2[k].filter(d => {
              // use 'fields' property to specifiy which fields to search
              if (search.fields && search.fields.length) {
                const d2 = {}
                search.fields.forEach(field => (d2[field] = d[field]))
                return searchText(search.text, JSON.stringify(d2))
              }
              return searchText(search.text, JSON.stringify(d))
            })
          })
        }
        const newProps = { data: data3 || data2 }
        if (subscribe) {
          newProps.subscribeToMore = () => {
            subscribeToMore({
              document: subscribe.gql,
              variables: subscribe.vars,
              updateQuery: (prev, { subscriptionData }) => {
                if (!subscriptionData.data) return prev
                const newItem =
                  subscriptionData.data[Object.keys(subscriptionData.data)[0]]
                const next = {
                  ...prev,
                }
                const key = Object.keys(prev)[0]
                next[key] = [...prev[key], newItem]
                return next
              },
            })
          }
        }
        return children(newProps) || null
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
  subscribe: PropTypes.object,
  OnError: PropTypes.element,
}

export default Query
