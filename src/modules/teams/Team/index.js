import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { SetData } from '../../../instruments'

const Team = ({ location, match, setData }) => {
  console.log(location.state)
  setData.teamId(match.params.id)
  return <Redirect to="/deployments" replace />
}

Team.propTypes = {
  location: PropTypes.object,
  match: PropTypes.object,
  setData: PropTypes.object,
}

export default SetData(Team, { teamId: true })
