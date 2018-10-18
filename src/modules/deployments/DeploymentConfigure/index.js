import React from 'react'
import PropTypes from 'prop-types'

import UpdateForm from './UpdateForm'
import Delete from './Delete'
import { CardMenu } from 'instruments'
import Update from '../Data/Update'

const Configure = Update(UpdateForm)

const menu = [
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
  {
    text: 'Environment Vars',
    id: 'env',
  },
  {
    text: 'Deprovision',
    id: 'delete',
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
      <Delete deployment={deployment} />
    </CardMenu>
  )
}

DeploymentConfigure.propTypes = {
  deployment: PropTypes.object,
}

export default DeploymentConfigure
