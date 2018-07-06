import React from 'react'
import PropTypes from 'prop-types'

import Data from '../Data'

const Workspace = ({ workspaces, Component, ...props }) => {
  const workspace = workspaces[0]
  return <Component workspace={workspace} {...props} />
}

Workspace.propTypes = {
  workspaces: PropTypes.array,
  Component: PropTypes.func,
}

export default Data(Workspace)
