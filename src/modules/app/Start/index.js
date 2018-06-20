import React from 'react'
import { Redirect } from 'react-router-dom'
const Start = () => {
  // TODO: redirect to deployments if team is set
  return <Redirect to="/teams" />
}

export default Start
