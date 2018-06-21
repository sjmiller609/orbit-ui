import React from 'react'
import PropTypes from 'prop-types'

import Configure from '../Configure'

import Data from '../Data'
import Module from '../../app/Module'

const Settings = ({ teams, menu, title }) => {
  const team = teams[0]
  // Error handled
  if (!team) return <Module nada />

  return (
    <Module metaTitle={title + ' | ' + team.label} menu={menu}>
      <Configure team={team} />
    </Module>
  )
}

Settings.propTypes = {
  teams: PropTypes.array,
  menu: PropTypes.object,
  title: PropTypes.string,
  onSuccess: PropTypes.func,
}

export default Data(Settings)
