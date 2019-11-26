import React from 'react'
import PropTypes from 'prop-types'

import UpdateForm from './UpdateForm'

import Delete from './Delete'
import { CardMenu } from 'instruments'
import Update from '../Data/Update'
import { lt, gteSeven } from '../helpers'

const Configure = Update(UpdateForm)

class DeploymentConfigure extends React.Component {
  mounted = true
  loaded = this.loaded.bind(this)
  state = {
    configure: false,
    resources: false,
  }

  componentWillUnmount() {
    this.mounted = false
  }

  loaded(c) {
    if (this.mounted && !this.state[c]) this.setState({ [c]: true })
  }

  // Determine if this deployment is out of date
  showUpgrade() {
    const { deployment, deploymentConfig } = this.props
    return lt(deployment.version, deploymentConfig.latestVersion)
  }

  // Dynamically create menu list
  menu() {
    const { deployment } = this.props

    const menu = [
      {
        text: 'Deployment Info',
        id: 'info',
      },
      {
        text: 'Deprovision',
        id: 'delete',
        newForm: true,
      },
    ]

    if (gteSeven(deployment.version)) {
      menu.splice(
        1,
        0,
        {
          text: 'Environment Vars',
          id: 'env',
        },
        {
          text: 'Executor',
          id: 'executor',
          newForm: true,
        },
        {
          text: 'Components',
          id: 'components',
        },
        {
          text: 'Resources',
          id: 'resources',
        }
      )
    }

    return menu
  }

  render() {
    const { deployment, workspaceId } = this.props
    const configVars = {
      version: deployment.version,
      type: deployment.type,
      deploymentId: deployment.id,
    }

    return (
      <CardMenu menu={this.menu()}>
        <Configure
          deployment={deployment}
          data={deployment}
          configVars={configVars}
          loaded={this.loaded}
          workspaceId={workspaceId}
        />
        <Delete workspaceId={workspaceId} deployment={deployment} />
      </CardMenu>
    )
  }
}

DeploymentConfigure.propTypes = {
  deployment: PropTypes.object,
  deploymentConfig: PropTypes.object,
  workspaceId: PropTypes.string,
}

export default DeploymentConfigure
