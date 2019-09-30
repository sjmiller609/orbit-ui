import React from 'react'
import PropTypes from 'prop-types'
import Module from './Module'

class Deployment extends React.Component {
  render() {
    const { match, location } = this.props
    const workspaceId = match.params.workspaceId
    const deploymentId = match.params.id

    const menu = {}

    menu.home = `/workspaces/${workspaceId}/deployments`

    menu.level2 = {
      text: deploymentId,
      to: location.pathname,
    }

    menu.subMenu = [
      {
        text: 'Overview',
        to: {
          pathname: match.url,
          state: { ...location.state },
        },
      },
      {
        text: 'Configure',
        to: {
          pathname: match.url + '/configure',
          state: { ...location.state },
        },
      },
      {
        text: 'Metrics',
        to: {
          pathname: match.url + '/metrics',
          state: { ...location.state },
        },
      },
      {
        text: 'Logs',
        to: {
          pathname: match.url + '/logs',
          state: { ...location.state },
        },
      },
      {
        text: 'Alerts',
        to: {
          pathname: match.url + '/alerts',
          state: { ...location.state },
        },
      },
      {
        text: 'Service Accounts',
        to: {
          pathname: match.url + '/service-accounts',
          state: { ...location.state },
        },
        exact: true,
      },
    ]

    const vars = {
      workspaceId,
      releaseName: deploymentId,
    }

    const current = menu.subMenu.find(
      m => m.to === location && location.pathname
    )

    return (
      <Module
        title={(current && current.text) || null}
        menu={menu}
        vars={{
          ...vars,
        }}
      />
    )
  }
}

Deployment.propTypes = {
  location: PropTypes.object,
  match: PropTypes.object,
  workspaceId: PropTypes.string,
}

export default Deployment
