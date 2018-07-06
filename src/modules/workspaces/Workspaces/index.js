import React from 'react'
import PropTypes from 'prop-types'

import List from '../List'
import Module from '../../app/Module'
import { SetData } from 'instruments'

class Workspaces extends React.Component {
  menu = {
    nav: 'workspaces',
  }

  componentWillMount() {
    this.props.setData.workspaceId(null)
  }

  render() {
    return (
      <Module metaTitle="Workspaces" menu={this.menu}>
        <List />
      </Module>
    )
  }
}

Workspaces.propTypes = {
  setData: PropTypes.object,
}

export default SetData(Workspaces)
