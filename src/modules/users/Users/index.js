import React from 'react'
import PropTypes from 'prop-types'

import List from '../List'
import Module from '../../app/Module'
import { GetData } from 'instruments'

class Users extends React.Component {
  menu = {
    nav: 'workspace',
  }

  render() {
    const vars = {
      workspaceId: this.props.getData.workspaceId,
      withUsers: true,
    }
    return (
      <Module metaTitle="Users" menu={this.menu}>
        <List vars={vars} />
      </Module>
    )
  }
}
Users.propTypes = {
  getData: PropTypes.object,
}

export default GetData(Users, { workspaceId: true })
