import React from 'react'
import PropTypes from 'prop-types'

import List from '../List'
import Module from '../../app/Module'
import { GetData } from 'instruments'

class Deployments extends React.Component {
  menu = {
    nav: 'workspace',
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
    const vars = {
      workspaceId: this.props.getData.workspaceId,
    }
    return (
      <Module metaTitle="Deployments" menu={this.menu}>
        <List
          search={{
            text: search,
            ...this.search,
          }}
          vars={vars}
        />
      </Module>
    )
  }
}
Deployments.propTypes = {
  getData: PropTypes.object,
}

export default GetData(Deployments, { workspaceId: true })
