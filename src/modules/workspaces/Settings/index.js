import React from 'react'
import PropTypes from 'prop-types'
import GetWorkspace from '../GetWorkspace'
import Module from '../../app/Module'
import Configure from '../Configure'

class Settings extends React.Component {
  menu = {
    nav: 'workspace',
  }

  render() {
    const { workspace } = this.props

    // Error handled
    if (!workspace) return <Module nada />

    return (
      <Module metaTitle={'Settings | ' + workspace.label} menu={this.menu}>
        <Configure workspace={workspace} />
      </Module>
    )
  }
}

Settings.propTypes = {
  workspace: PropTypes.object,
}

export default GetWorkspace(Settings)
