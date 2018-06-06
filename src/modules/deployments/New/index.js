import React from 'react'
import PropTypes from 'prop-types'

import Configure from './Configure'
import { Module } from '../../../instruments'

class New extends React.Component {
  onSuccess = this.onSuccess.bind(this)
  back = '/deployments'
  title = 'New Deployment'

  onSuccess() {
    this.props.history.push(this.back)
  }
  render() {
    const menu = {
      back: this.back,
      level2: {
        text: '',
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

New.propTypes = {
  history: PropTypes.object,
}

export default New
