'use strict'
import React from 'react'
import PropTypes from 'prop-types'

import { Subscription as Apollo } from 'react-apollo'
import { CardError } from 'instruments'

const Subscribe = ({ gql, vars, skip, children, OnError, fetchPolicy }) => {
  return (
    <Apollo
      subscription={gql}
      fetchPolicy={fetchPolicy}
      variables={vars}
      skip={skip}
      errorPolicy="all">
      {({ loading, error, data }) => {
        if (error) {
          if (OnError) return OnError
          return <CardError />
        }

        return children({ data, loading }) || null
      }}
    </Apollo>
  )
}

Subscribe.propTypes = {
  gql: PropTypes.object,
  children: PropTypes.func.isRequired,
  vars: PropTypes.object,
  skip: PropTypes.bool,
  OnError: PropTypes.element,
  fetchPolicy: PropTypes.string,
}

export default Subscribe
