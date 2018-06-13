import React from 'react'
import PropTypes from 'prop-types'

import Module from './Module'

class Deployment extends React.Component {
  menu = {
    home: '/deployments',
    nav: 'deployment',
  }

  render() {
    const { match, location } = this.props
    const id = match.params.id

    this.menu.level2 = {
      text: id,
      to: location.pathname,
    }

    const vars = {
      releaseName: id,
    }
    return <Module title="Configure" menu={this.menu} vars={vars} />
  }
}

Deployment.propTypes = {
  location: PropTypes.object,
  match: PropTypes.object,
}

export default Deployment
