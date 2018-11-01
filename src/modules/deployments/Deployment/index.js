import React from 'react'
import PropTypes from 'prop-types'
import Module from './Module'

class Deployment extends React.Component {
  menu = {
    home: '/deployments',
  }

  render() {
    const { match, location } = this.props
    const id = match.params.id

    this.menu.level2 = {
      text: id,
      to: location.pathname,
    }
    this.menu.subMenu = [
      {
        text: 'Overview',
        to: match.url,
      },
      {
        text: 'Configure',
        to: match.url + '/configure',
      },
      {
        text: 'Logs',
        to: match.url + '/logs',
      },
      {
        text: 'Alerts',
        to: match.url + '/alerts',
      },
      {
        text: 'Service Accounts',
        to: match.url + '/service-accounts',
        exact: false,
      },
    ]

    const vars = {
      releaseName: id,
    }
    const current = this.menu.subMenu.find(m => m.to === location.pathname)

    return (
      <Module
        title={(current && current.text) || null}
        menu={this.menu}
        vars={vars}
      />
    )
  }
}

Deployment.propTypes = {
  location: PropTypes.object,
  match: PropTypes.object,
}

export default Deployment
