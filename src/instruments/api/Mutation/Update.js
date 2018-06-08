'use strict'
import React from 'react'
import Mutation from '../Mutation'

const Update = props => {
  return (
    <Mutation
      update={() => {
        console.log('update function')
      }}
      {...props}
    />
  )
}

export default Update
