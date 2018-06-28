import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

import DeploymentConfigure from '../DeploymentConfigure'
import DeploymentOverview from '../DeploymentOverview'
import { Load } from 'instruments'
import Data from '../Data'
import Module from '../../app/Module'

const Deployment = ({ deployments, menu, title }) => {
  const deployment = deployments[0]
  // Error handled
  if (!deployment) return <Module nada />

  const menu2 = {
    ...menu,
  }
  menu2.level2.text = deployment.label

  const path = '/deployments/' + deployment.releaseName

  return (
    <Module metaTitle={title + ' | ' + deployment.label} menu={menu}>
      <Route
        path={path + '/configure'}
        exact
        render={() => <DeploymentConfigure deployment={deployment} />}
      />
      <Route
        path={path}
        exact
        render={() => <DeploymentOverview deployment={deployment} />}
      />
    </Module>
  )
}

Deployment.propTypes = {
  deployments: PropTypes.array,
  menu: PropTypes.object,
  title: PropTypes.string,
  onSuccess: PropTypes.func,
}

export default Data(Deployment)
