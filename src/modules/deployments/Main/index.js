import React from 'react'
import List from '../List'
import { Module } from '../../../instruments'

const Main = () => {
  return (
    <Module metaTitle="Deployments">
      <List vars1={{ deploymentId: 'b38f6195-cfaf-4f57-914a-b826e916c51f' }} />
    </Module>
  )
}

export default Main
