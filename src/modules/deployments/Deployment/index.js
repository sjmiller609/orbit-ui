import React from 'react'
import PropTypes from 'prop-types'

import Module from './Module'

class Deployment extends React.Component {
  onSuccess = this.onSuccess.bind(this)
  back = '/deployments'
  title = 'Configure'
  subMenu = []

  onSuccess() {
    //  this.props.history.push(this.back)
  }
  render() {
    const { match } = this.props
    const id = match.params.id

    const menu = {
      back: this.back,
      level2: {
        text: id,
        to: this.props.history.location.pathname,
      },
    }
    const vars = {
      releaseName: id,
    }
    return <Module title={this.title} menu={menu} vars={vars} />
  }
}

Deployment.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object,
}

export default Deployment
