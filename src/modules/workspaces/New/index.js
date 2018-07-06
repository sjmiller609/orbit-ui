import React from 'react'
import PropTypes from 'prop-types'

import Configure from './Configure'
import Module from '../../app/Module'

class New extends React.Component {
  title = 'New Workspace'
  menu = {
    home: '/',
  }

  render() {
    this.menu.level2 = {
      text: '',
      to: this.props.location.pathname,
    }
    return (
      <Module metaTitle={this.title} menu={this.menu}>
        <Configure title={this.title} />
      </Module>
    )
  }
}

New.propTypes = {
  location: PropTypes.object,
}

export default New
