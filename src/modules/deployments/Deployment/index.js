import React from 'react'
import PropTypes from 'prop-types'

import Configure from '../Configure'
import { Module } from '../../../instruments'

class Deployment extends React.Component {
  onSuccess = this.onSuccess.bind(this)
  back = '/deployments'
  title = 'Configure'
  subMenu = []

  onSuccess() {
    this.props.history.push(this.back)
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
    return (
      <Module metaTitle={this.title} menu={menu}>
        <Configure title={this.title} onSuccess={this.onSuccess} />
      </Module>
    )
  }
}

Deployment.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object,
}

export default Deployment
