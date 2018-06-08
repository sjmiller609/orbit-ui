'use strict'
import React from 'react'
import Mutation from '../Mutation'

const Create = props => {
  return (
    <Mutation
      update={() => {
        console.log('create function')
        // TODO: get document back from mutations and update cache manually
        // update={(cache, data) => {
        //   if (!query) return
        //   // use first key to auto grab Document name
        //   const result = data.data[Object.keys(data.data)[0]]
        //   const results = cache.readQuery({ query: query.gql })
        //   cache.writeQuery({
        //     query: query.name,
        //     data: { [query.result]: results[query.result].concat([result]) },
        //   })
        // }}
      }}
      {...props}
    />
  )
}

export default Create
