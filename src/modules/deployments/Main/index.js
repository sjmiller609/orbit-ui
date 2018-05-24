import React from 'react'
import List from '../List'
import { Module } from '../../../instruments'

class Main extends React.Component {
  // state for entire module
  state = { search: '' }
  // search obj constants
  search = {
    placeholder: 'Search Deployments',
    call: search => this.setState({ search }),
  }

  render() {
    const { search } = this.state
    return (
      <Module metaTitle="Deployments">
        <List
          vars1={{ deploymentId: 'b38f6195-cfaf-4f57-914a-b826e916c51f' }}
          search={{
            text: search,
            ...this.search,
          }}
        />
      </Module>
    )
  }
}

export default Main
