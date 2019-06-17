import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch, Redirect } from 'react-router-dom'

import { Load } from 'instruments'
import Data from '../Data'
import Module from '../../app/Module'
import DeploymentConfigData from '../Data/Config'
import { reject } from 'lodash'

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

const DeploymentConfig = DeploymentConfigData(Configure)
const Logs = Load(() =>
  import(/* webpackPrefetch: true */ 'modules/logs/DeploymentLogs')
)

const Metrics = Load(() =>
  import(/* webpackPrefetch: true */ 'modules/metrics/DeploymentMetrics')
)

const isLogs = str => str && str.toLowerCase() === 'logs'



const Deployment = ({ deployments, loggingEnabled, menu, title }) => {
  const deployment = deployments[0]
  // Error handled
  if (!deployment) return <Module nada />

  const menu2 = {
    ...menu,
    // Remove logging tab (and route) if logging is disabled.
    subMenu: loggingEnabled
      ? menu.subMenu
      : reject(menu.subMenu, i => isLogs(i.text)),
  }
  menu2.level2.text = deployment.label

  // We want to signal to the our parent wrapper that we want
  // it to be fullHeight, so the log console expands to fill the screen.
  // There's probably a cleaner way to do this.
  const viewingLogs = isLogs(title)

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
      <Module metaTitle={metaTitle} menu={menu2} fullHeight={viewingLogs}>
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
          path={path + '/metrics'}
          exact
          render={() => <Metrics deployment={deployment} />}
        />
        {loggingEnabled && (
          <Route
            path={path + '/logs'}
            exact
            render={() => <Logs deployment={deployment} />}
          />
        )}
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
  loggingEnabled: PropTypes.bool,
  menu: PropTypes.object,
  title: PropTypes.string,
  onSuccess: PropTypes.func,
}

export default Data(Deployment)
