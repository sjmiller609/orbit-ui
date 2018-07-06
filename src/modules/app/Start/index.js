import React from 'react'
import { Redirect } from 'react-router-dom'
const Start = () => {
  // TODO: redirect to deployments if workspace is set
  return <Redirect to="/workspaces" />
}

export default Start
