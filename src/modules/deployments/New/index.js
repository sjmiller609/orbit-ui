import React from 'react'
import PropTypes from 'prop-types'

import ConfigureForm from '../DeploymentConfigure/ConfigureForm'
import Module from '../../app/Module'
import Create from '../Data/Create'

const Configure = Create(ConfigureForm)

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
        <Configure title={this.title} />
      </Module>
    )
  }
}

New.propTypes = {
  location: PropTypes.object,
}

export default New
