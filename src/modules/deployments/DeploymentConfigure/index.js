import React from 'react'
import PropTypes from 'prop-types'

import UpdateForm from './UpdateForm'
import ResourcesForm from './ResourcesForm'

import Delete from './Delete'
import Upgrade from './Upgrade'
import { CardMenu } from 'instruments'
import Update from '../Data/Update'
import { upgradeExists } from './helpers'

const Configure = Update(UpdateForm)
const ConfigureResources = Update(ResourcesForm)

const menu = [
  {
    text: 'Deployment Info',
    id: 'info',
  },
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
  },
  {
    text: 'Deprovision',
    id: 'delete',
    newForm: true,
  },
]

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

  render() {
    const { deployment, deploymentConfig } = this.props
    const configVars = {
      version: deployment.version,
      type: deployment.type,
      deploymentId: deployment.id,
    }

    // Determine if this deployment is out of date
    const upgrade = upgradeExists(
      deployment.version,
      deploymentConfig.latestVersion
    )

    return (
      <CardMenu menu={menu}>
        {upgrade && (
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
        {this.state.configure && (
          <ConfigureResources
            deployment={deployment}
            data={deployment}
            configVars={configVars}
            loaded={this.loaded}
          />
        )}
        {this.state.resources && <Delete deployment={deployment} />}
      </CardMenu>
    )
  }
}

DeploymentConfigure.propTypes = {
  deployment: PropTypes.object,
  deploymentConfig: PropTypes.object,
}

export default DeploymentConfigure
