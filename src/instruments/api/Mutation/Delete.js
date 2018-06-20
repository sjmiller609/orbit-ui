'use strict'
import React from 'react'
import PropTypes from 'prop-types'

import Mutation from '../Mutation'

// NOTE: Can't get delete to update cache correctly, so just refetching queries...
const Delete = ({ ...props }) => {
  return (
    <Mutation
      // update={(cache, data) => {
      //   if (!query) return
      //   // use first key to auto grab Document name
      //   const result = data.data[Object.keys(data.data)[0]]
      //   const results = cache.readQuery({ query: query.name })
      //   // remove it from results
      //   const q = results[query.type]
      //   console.log(q)
      //   const i = q.findIndex(r => r.id === result.id)
      //   console.log(i)
      //   q.splice(i, 1)
      //   console.log(q)
      //   cache.writeQuery({
      //     query: query.name,
      //     data: q,
      //   })
      // }}
      {...props}
    />
  )
}

Delete.propTypes = {
  query: PropTypes.object,
}

export default Delete
