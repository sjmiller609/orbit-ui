import React from 'react'
import PropTypes from 'prop-types'

import Platform from '../Platform'
import Module from '../../app/Module'
// import Data from '../Data'

class Settings extends React.Component {
  menu = {
    nav: 'admin',
  }

  render() {
    // const { platform } = this.props
    const data = {
      //  fullName: user.fullName || '',
    }

    return (
      <Module metaTitle="Admin Settings" menu={this.menu}>
        <Platform data={data} />
      </Module>
    )
  }
}

Settings.propTypes = {
  platform: PropTypes.object,
}

export default Settings
