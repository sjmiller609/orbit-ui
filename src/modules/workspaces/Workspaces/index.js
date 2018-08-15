import React from 'react'
import PropTypes from 'prop-types'

import List from '../List'
import Module from '../../app/Module'

class Workspaces extends React.Component {
  menu = {
    nav: 'workspaces',
  }
  // state for entire module
  state = { search: '' }
  // search obj constants
  search = {
    delay: false,
    placeholder: 'Search Workspaces',
    call: search => this.setState({ search }),
  }

  render() {
    const { search } = this.state

    return (
      <Module metaTitle="Workspaces" menu={this.menu}>
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

Workspaces.propTypes = {
  setData: PropTypes.object,
}

export default Workspaces
