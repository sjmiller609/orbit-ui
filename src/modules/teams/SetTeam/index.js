import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { SetData } from 'instruments'

const SetTeam = ({ location, match, setData }) => {
  const from = location.state && location.state.from
  setData.teamId(match.params.id)
  return <Redirect to={from || '/deployments'} replace />
}

SetTeam.propTypes = {
  location: PropTypes.object,
  match: PropTypes.object,
  setData: PropTypes.object,
}

export default SetData(SetTeam, { teamId: true })
