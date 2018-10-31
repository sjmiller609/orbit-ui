import React from 'react'
import PropTypes from 'prop-types'

import UpdateForm from './UpdateForm'
import ResourcesForm from './ResourcesForm'

import Delete from './Delete'
import { CardMenu } from 'instruments'
import Update from '../Data/Update'

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

const DeploymentConfigure = ({ deployment }) => {
  const configVars = {
    version: deployment.version,
    type: deployment.type,
    deploymentId: deployment.id,
  }
  return (
    <CardMenu menu={menu}>
      <Configure
        deployment={deployment}
        data={deployment}
        configVars={configVars}
      />
      <ConfigureResources
        deployment={deployment}
        data={deployment}
        configVars={configVars}
      />
      <Delete deployment={deployment} />
    </CardMenu>
  )
}

DeploymentConfigure.propTypes = {
  deployment: PropTypes.object,
}

export default DeploymentConfigure
