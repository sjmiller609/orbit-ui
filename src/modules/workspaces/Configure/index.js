import React from 'react'
import PropTypes from 'prop-types'

import Configure from './Configure'
import Delete from './Delete'

const Settings = ({ workspace }) => {
  return (
    <React.Fragment>
      <Configure workspace={workspace} data={workspace} />
      <Delete workspace={workspace} vars={{ workspaceId: workspace.id }} />
    </React.Fragment>
  )
}

Settings.propTypes = {
  workspace: PropTypes.object,
}

export default Settings
