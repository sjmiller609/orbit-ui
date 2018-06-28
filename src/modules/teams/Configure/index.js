import React from 'react'
import PropTypes from 'prop-types'

import Configure from './Configure'
import Delete from './Delete'

const Settings = ({ team }) => {
  return (
    <React.Fragment>
      <Configure team={team} data={team} />
      <Delete team={team} vars={{ teamId: team.id }} />
    </React.Fragment>
  )
}

Settings.propTypes = {
  team: PropTypes.object,
}

export default Settings
