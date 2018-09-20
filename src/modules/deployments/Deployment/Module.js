import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch, Redirect } from 'react-router-dom'

import { Load } from 'instruments'
import Data from '../Data'
import Module from '../../app/Module'
const Configure = Load(() =>
  import(/* webpackPrefetch: true */ '../DeploymentConfigure')
)
const Overview = Load(() =>
  import(/* webpackPrefetch: true */ '../DeploymentOverview')
)
const ServiceAccounts = Load(() =>
  import(/* webpackPrefetch: true */ 'modules/service-accounts/ServiceAccounts')
)
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
      <Switch>
        <Route
          path={path + '/configure'}
          exact
          render={() => <Configure deployment={deployment} />}
        />
        <Route
          path={path}
          exact
          render={() => <Overview deployment={deployment} />}
        />
        {/* <Route
          path={path + '/logs'}
          exact
          render={() => {
          const Logs = Load(() => import(/* webpackPrefetch: true */
        /* 'modules/logs/DeploymentLogs'))
          return <Logs deployment={deployment} />
          }}
        /> */}
        <Route
          path={path + '/service-accounts'}
          exact
          render={() => <ServiceAccounts deployment={deployment} />}
        />
        <Redirect to="/404" />
      </Switch>
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
