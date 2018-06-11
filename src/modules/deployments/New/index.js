import React from 'react'
import PropTypes from 'prop-types'

import Configure from './Configure'
import { Module } from '../../../instruments'

class New extends React.Component {
  back = '/deployments'
  title = 'New Deployment'

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
        <Configure title={this.title} />
      </Module>
    )
  }
}

New.propTypes = {
  history: PropTypes.object,
}

export default New
