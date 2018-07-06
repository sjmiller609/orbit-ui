import React from 'react'
import PropTypes from 'prop-types'

import List from '../List'
import Module from '../../app/Module'
import { GetData } from 'instruments'

class Users extends React.Component {
  menu = {
    nav: 'workspace',
  }
  // state for entire module
  state = { search: '' }
  // search obj constants
  search = {
    delay: false,
    placeholder: 'Search Users',
    call: search => this.setState({ search }),
    fields: ['users'],
  }

  render() {
    const { search } = this.state
    const vars = {
      workspaceId: this.props.getData.workspaceId,
      withUsers: true,
    }
    return (
      <Module metaTitle="Users" menu={this.menu}>
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
Users.propTypes = {
  getData: PropTypes.object,
}

export default GetData(Users, { workspaceId: true })
