import React from 'react'
import PropTypes from 'prop-types'

import CreateForm from '../DeploymentConfigure/CreateForm'
import Module from '../../app/Module'
import Create from '../Data/Create'
import Data from '../Data'

const Configure = Create(CreateForm)
import { CardMenu } from 'instruments'

const cardMenu = [
  {
    text: 'Deployment Info',
    id: 'info',
  },
  {
    text: 'Executor',
    id: 'executor',
  },
  {
    text: 'Resources',
    id: 'resources',
  },
]

class New extends React.Component {
  title = 'New Deployment'
  menu = {
    home: '/deployments',
  }

  render() {
    this.menu.level2 = {
      text: '',
      to: this.props.location.pathname,
    }
    return (
      <Module metaTitle={this.title} menu={this.menu}>
        <CardMenu menu={cardMenu}>
          <Configure
            title={this.title}
            workspaces={this.props.workspaces}
            deployments={this.props.deployments}
          />
        </CardMenu>
      </Module>
    )
  }
}

New.propTypes = {
  location: PropTypes.object,
  workspaces: PropTypes.array,
  deployments: PropTypes.array,
}

export default Data(New)
