import React from 'react'
import PropTypes from 'prop-types'

import CreateForm from '../DeploymentConfigure/CreateForm'
import Module from '../../app/Module'
import Create from '../Data/Create'

const Configure = Create(CreateForm)
import { CardMenu } from 'instruments'

const cardMenu = [
  {
    text: 'Deployment Info',
    id: 'info',
  },
  {
    text: 'Resources',
    id: 'resources',
  },
  {
    text: 'Executor',
    id: 'executor',
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
          <Configure title={this.title} />
        </CardMenu>
      </Module>
    )
  }
}

New.propTypes = {
  location: PropTypes.object,
}

export default New
