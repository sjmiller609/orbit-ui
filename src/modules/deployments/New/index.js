import React from 'react'
import Configure from '../Configure'
import { Module } from '../../../instruments'

class New extends React.Component {
  render() {
    const title = 'New Deployment'
    return (
      <Module metaTitle={title}>
        <Configure title={title} />
      </Module>
    )
  }
}

export default New
