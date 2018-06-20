import React from 'react'
import List from '../List'
import Module from '../../app/Module'

class Deployments extends React.Component {
  menu = {
    nav: 'team',
  }
  // state for entire module
  state = { search: '' }
  // search obj constants
  search = {
    delay: false,
    placeholder: 'Search Deployments',
    call: search => this.setState({ search }),
  }

  render() {
    const { search } = this.state

    return (
      <Module metaTitle="Deployments" menu={this.menu}>
        <List
          search={{
            text: search,
            ...this.search,
          }}
        />
      </Module>
    )
  }
}

export default Deployments
