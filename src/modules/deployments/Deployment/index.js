import React from 'react'
import PropTypes from 'prop-types'
import Module from './Module'

class Deployment extends React.Component {
  menu = {
    home: '/deployments',
  }

  render() {
    const { match, location, workspaceId } = this.props
    const id = match.params.id

    const workspaceUuid =
      workspaceId || (location.state && location.state.workspaceId)

    this.menu.level2 = {
      text: id,
      to: {
        pathname: location.pathname,
        state: {
          workspaceId: workspaceUuid,
        },
      },
    }
    this.menu.subMenu = [
      {
        text: 'Overview',
        to: {
          pathname: match.url,
          state: {
            workspaceId: workspaceUuid,
          },
        },
      },
      {
        text: 'Configure',
        to: {
          pathname: match.url + '/configure',
          state: {
            workspaceId: workspaceUuid,
          },
        },
      },
      {
        text: 'Metrics',
        to: {
          pathname: match.url + '/metrics',
          state: {
            workspaceId: workspaceUuid,
          },
        },
      },
      {
        text: 'Logs',
        to: {
          pathname: match.url + '/logs',
          state: {
            workspaceId: workspaceUuid,
          },
        },
      },
      {
        text: 'Alerts',
        to: {
          pathname: match.url + '/alerts',
          state: {
            workspaceId: workspaceUuid,
          },
        },
      },
      {
        text: 'Service Accounts',
        to: {
          pathname: match.url + '/service-accounts',
          state: {
            workspaceId: workspaceUuid,
          },
        },
        exact: false,
      },
    ]

    const current = this.menu.subMenu.find(
      m =>
        m.to ===
        {
          pathname: location.pathname,
          state: {
            workspaceId: workspaceUuid,
          },
        }
    )

    const vars = {
      workspaceId: workspaceUuid,
      releaseName: id,
    }

    return (
      <Module
        title={(current && current.text) || null}
        menu={this.menu}
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
