import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch, Redirect } from 'react-router-dom'

import { Load } from 'instruments'
import Data from '../Data'
import Module from '../../app/Module'
import DeploymentConfigData from '../Data/Config'

const Configure = Load(() =>
  import(/* webpackPrefetch: true */ '../DeploymentConfigure')
)
const Overview = Load(() =>
  import(/* webpackPrefetch: true */ '../DeploymentOverview')
)
const ServiceAccounts = Load(() =>
  import(/* webpackPrefetch: true */ 'modules/service-accounts/ServiceAccounts')
)
const Alerts = Load(() =>
  import(/* webpackPrefetch: true */ 'modules/alerts/Alerts')
)

<<<<<<< HEAD
const DeploymentConfig = DeploymentConfigData(Configure)
=======
>>>>>>> 44feb8650ccade1ae24d56778d5f4a70e58e2b86
const Logs = Load(() =>
  import(/* webpackPrefetch: true */ 'modules/logs/DeploymentLogs')
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
  let metaTitle = deployment.label
  if (title) metaTitle = title + ' | ' + metaTitle
  return (
    <Switch>
      {/* Service accounts loads module on its own */}
      <Route
        path={path + '/service-accounts'}
        render={() => (
          <ServiceAccounts
            deployment={deployment}
            module={{
              metaTitle,
              menu: menu2,
              path: path + '/service-accounts',
            }}
          />
        )}
      />
      <Module metaTitle={metaTitle} menu={menu2}>
        <Route
          path={path + '/configure'}
          exact
          render={() => <DeploymentConfig deployment={deployment} />}
        />
        <Route
          path={path}
          exact
          render={() => <Overview deployment={deployment} />}
        />
        <Route
          path={path + '/logs'}
          exact
          render={() => <Logs deployment={deployment} />}
        />
        <Route
          path={path + '/alerts'}
          exact
          render={() => <Alerts deployment={deployment} />}
        />
      </Module>

      <Redirect to="/404" />
    </Switch>
  )
}

Deployment.propTypes = {
  deployments: PropTypes.array,
  menu: PropTypes.object,
  title: PropTypes.string,
  onSuccess: PropTypes.func,
}

export default Data(Deployment)
