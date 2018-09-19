'use strict'
import React from 'react'
import PropTypes from 'prop-types'

import Mutation from '../Mutation'

const Create = ({ query, ...props }) => {
  return (
    <Mutation
      update={(cache, data) => {
        if (!query || !query.type) return
        // use first key to auto grab Document name
        const result = data.data[Object.keys(data.data)[0]]
        // NOTE: this will error if not found, but apollo already handles it
        const results = cache.readQuery({
          query: query.name,
          variables: query.vars,
        })
        if (!results) return
        cache.writeQuery({
          query: query.name,
          variables: query.vars,
          data: { [query.type]: results[query.type].concat([result]) },
        })
      }}
      {...props}
    />
  )
}

Create.propTypes = {
  query: PropTypes.object,
}

export default Create
