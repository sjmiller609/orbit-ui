import React from 'react'
import Form from './Form'
import { Module } from '../../../instruments'

class New extends React.Component {
  render() {
    const title = 'New Deployment'
    return (
      <Module metaTitle={title}>
        <Form title={title} />
      </Module>
    )
  }
}

export default New
