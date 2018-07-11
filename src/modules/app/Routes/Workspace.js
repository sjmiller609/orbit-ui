import React from 'react'
import PropTypes from 'prop-types'

import WorkspacesData from 'modules/workspaces/Data'

const Workspace = ({ workspaces, component: Component, OnError, ...props }) => {
  if (!workspaces || !workspaces[0]) return OnError
  return <Component {...props} />
}

Workspace.propTypes = {
  component: PropTypes.func,
  workspaces: PropTypes.array,
  OnError: PropTypes.element,
}

export default WorkspacesData(Workspace)
