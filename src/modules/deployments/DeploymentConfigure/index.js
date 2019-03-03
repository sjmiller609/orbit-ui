import React from 'react'
import PropTypes from 'prop-types'

import UpdateForm from './UpdateForm'
import ResourcesForm from './ResourcesForm'

import Delete from './Delete'
import Upgrade from './Upgrade'
import { CardMenu } from 'instruments'
import Update from '../Data/Update'
import { lt, gteSeven } from '../helpers'

const Configure = Update(UpdateForm)
const ConfigureResources = Update(ResourcesForm)

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

  // Determine when to show delete (lazy loading)
  showDelete() {
    const { deployment } = this.props
    return gteSeven(deployment.version)
      ? this.state.resources
      : this.state.configure
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
    const { deployment, deploymentConfig } = this.props
    const configVars = {
      version: deployment.version,
      type: deployment.type,
      deploymentId: deployment.id,
    }

    return (
      <CardMenu menu={this.menu()}>
        {this.showUpgrade() && (
          <Upgrade
            deployment={deployment}
            deploymentConfig={deploymentConfig}
          />
        )}
        <Configure
          deployment={deployment}
          data={deployment}
          configVars={configVars}
          loaded={this.loaded}
        />
        {this.state.configure &&
          gteSeven(deployment.version) && (
            <ConfigureResources
              deployment={deployment}
              data={deployment}
              configVars={configVars}
              loaded={this.loaded}
            />
          )}
        {this.showDelete() && <Delete deployment={deployment} />}
      </CardMenu>
    )
  }
}

DeploymentConfigure.propTypes = {
  deployment: PropTypes.object,
  deploymentConfig: PropTypes.object,
}

export default DeploymentConfigure
