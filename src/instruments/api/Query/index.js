'use strict'
import React from 'react'
import PropTypes from 'prop-types'

import { Query as Apollo } from 'react-apollo'
import { Loading, CardError } from 'instruments'
import { takeRight } from 'lodash'

const Query = ({
  gql,
  vars,
  skip,
  children,
  OnError,
  subscribe,
  fetchPolicy,
  sortNewest = true,
  sortBy,
}) => {
  return (
    <Apollo
      query={gql}
      fetchPolicy={fetchPolicy}
      variables={vars}
      skip={skip}
      errorPolicy="all">
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
              // TODO: add support for other types of fields to sort by
              data2[k].sort((a, b) => {
                if (!a || !b) return
                const a1 = new Date(
                  a[sortBy] || a.updatedAt || a.createdAt
                ).getTime()
                const b1 = new Date(
                  a[sortBy] || b.updatedAt || b.createdAt
                ).getTime()
                return sortNewest ? b1 - a1 : a1 - b1
              })
            }
          } else {
            data2[k] = {
              ...data[k],
            }
          }
        })

        let data3

        const newProps = { data: data3 || data2 }

        if (subscribe) {
          newProps.subscribeToMore = () => {
            return subscribeToMore({
              document: subscribe.gql,
              variables: subscribe.vars,
              updateQuery: (prev, { subscriptionData }) => {
                if (!subscriptionData.data) return prev

                const newItem =
                  subscriptionData.data[Object.keys(subscriptionData.data)[0]]

                const key = Object.keys(prev)[0]

                const next = {
                  ...prev,
                }
                next[key] = [...takeRight(prev[key], 300), newItem]
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
  subscribe: PropTypes.object,
  OnError: PropTypes.element,
  sortNewest: PropTypes.bool,
  fetchPolicy: PropTypes.string,
  sortBy: PropTypes.string,
}

export default Query
