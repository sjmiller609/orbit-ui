import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Load } from 'instruments'

const List = Load(() => import(/* webpackPrefetch: true */ '../List'))
const New = Load(() => import(/* webpackPrefetch: true */ '../New'))
const Configure = Load(() => import(/* webpackPrefetch: true */ '../Configure'))

import Module from 'modules/app/Module'

class ServiceAccounts extends React.Component {
  menu = {
    nav: 'workspace',
  }
  // state for entire module
  state = { search: '' }
  // search obj constants
  search = {
    delay: false,
    placeholder: 'Search Service Accounts',
    call: search => this.setState({ search }),
  }

  render() {
    const { search } = this.state
    const { deployment, module } = this.props
    const deploymentId = deployment && deployment.id

    const module2 = {
      // set defaults
      menu: {
        ...this.menu,
      },
      metaTitle: 'Astronomer',
      path: '/service-accounts',
      ...module,
    }

    if (module2.menu.level2) module2.menu.level2.to = module2.path

    return (
      <Switch>
        <Route
          path={module2.path + '/new'}
          exact
          render={() => (
            <New
              deploymentId={deploymentId}
              module={{
                ...module2,
                metaTitle: 'New Service Account | ' + module2.metaTitle,
              }}
            />
          )}
        />

        <Route
          path={module2.path}
          exact
          render={() => (
            <Module {...module2}>
              <List
                search={{
                  text: search,
                  ...this.search,
                }}
                deploymentId={deploymentId}
                path={module2.path}
              />
            </Module>
          )}
        />
        <Route
          path={module2.path + '/:id'}
          exact
          render={({ match, location }) => {
            return (
              <Module
                {...module2}
                metaTitle={'Service Account | ' + module2.metaTitle}>
                <Configure
                  path={module2.path}
                  deploymentId={deploymentId}
                  apiKey={location.state && location.state.apiKey}
                  vars={{
                    serviceAccountId: match.params.id,
                  }}
                />
              </Module>
            )
          }}
        />

        <Redirect to="/404" />
      </Switch>
    )
  }
}
ServiceAccounts.propTypes = {
  deployment: PropTypes.object,
  module: PropTypes.object,
}

export default ServiceAccounts
