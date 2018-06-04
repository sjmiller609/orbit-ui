import React from 'react'
import PropTypes from 'prop-types'

import Configure from '../Configure'
import { Module } from '../../../instruments'

class New extends React.Component {
  onSuccess = this.onSuccess.bind(this)
  onSuccess() {
    console.log('success')
    this.props.history.push('/deployments')
  }
  render() {
    const title = 'New Deployment'
    return (
      <Module metaTitle={title}>
        <Configure title={title} onSuccess={this.onSuccess} />
      </Module>
    )
  }
}

New.propTypes = {
  history: PropTypes.object,
}

export default New
