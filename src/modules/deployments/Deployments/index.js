import React from 'react'
import PropTypes from 'prop-types'

import List from '../List'
import Module from '../../app/Module'
import { GetData } from 'instruments'

class Deployments extends React.Component {
  menu = {
    nav: 'workspace',
  }

  render() {
    const vars = {
      workspaceId: this.props.getData.workspaceId,
    }
    return (
      <Module metaTitle="Deployments" menu={this.menu}>
        <List vars={vars} />
      </Module>
    )
  }
}
Deployments.propTypes = {
  getData: PropTypes.object,
}

export default GetData(Deployments, { workspaceId: true })
