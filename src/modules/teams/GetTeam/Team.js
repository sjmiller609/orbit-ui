import React from 'react'
import PropTypes from 'prop-types'

import Data from '../Data'

const Team = ({ teams, Component, ...props }) => {
  const team = teams[0]
  return <Component team={team} {...props} />
}

Team.propTypes = {
  teams: PropTypes.array,
  Component: PropTypes.func,
}

export default Data(Team)
