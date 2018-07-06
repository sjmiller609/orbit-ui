import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { SetData } from 'instruments'

const SetWorkspace = ({ location, match, setData }) => {
  const from = location.state && location.state.from
  setData.workspaceId(match.params.id)
  return <Redirect to={from || '/deployments'} replace />
}

SetWorkspace.propTypes = {
  location: PropTypes.object,
  match: PropTypes.object,
  setData: PropTypes.object,
}

export default SetData(SetWorkspace, { workspaceId: true })
