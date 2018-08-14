import React from 'react'
import PropTypes from 'prop-types'

import Profile from '../Profile'
import Module from '../../app/Module'
import Data from '../Data'

class Settings extends React.Component {
  menu = {
    nav: 'workspaces',
  }

  render() {
    const { self } = this.props
    const data = {
      fullName: self.fullName || '',
    }
    return (
      <Module metaTitle="Personal Settings" menu={this.menu}>
        <Profile data={data} />
      </Module>
    )
  }
}

Settings.propTypes = {
  self: PropTypes.object,
}

export default Data(Settings)
