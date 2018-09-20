import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Load } from 'instruments'

const List = Load(() => import(/* webpackPrefetch: true */ '../List'))
const New = Load(() => import(/* webpackPrefetch: true */ '../New'))
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
    const path = module.path + '/service-accounts'
    return (
      <Switch>
        <Route
          path={path + '/new'}
          exact
          render={() => (
            <New
              module={{
                ...module,
                metaTitle: `New Service Account | ${deployment &&
                  deployment.label + ' | '} Astronomer`,
              }}
            />
          )}
        />
        <Route
          path={path}
          exact
          render={() => (
            <Module {...module}>
              <List
                search={{
                  text: search,
                  ...this.search,
                }}
                baseUrl={`/deployments/${
                  deployment.releaseName
                }/service-accounts`}
                deploymentId={deployment && deployment.id}
              />
            </Module>
          )}
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
