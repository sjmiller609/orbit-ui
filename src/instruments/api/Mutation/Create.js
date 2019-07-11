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
        try {
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
        } catch (error) {
          // don't report error when apollo tries to update cache query that hasn't been run yet (usually happens when someone navs directly to create page or refreshes and kills cached queries)
          if (~error.toString().indexOf("Can't find field")) return
        }
      }}
      {...props}
    />
  )
}

Create.propTypes = {
  query: PropTypes.object,
}

export default Create
