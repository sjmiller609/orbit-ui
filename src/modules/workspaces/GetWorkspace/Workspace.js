import React from 'react'
import PropTypes from 'prop-types'

import Data from '../Data'
import { find } from 'lodash'

const Workspace = ({ workspaces, workspaceId, Component, ...props }) => {
  const workspace = find(workspaces, function(o) {
    return o.id == workspaceId
  })
  return <Component workspace={workspace} {...props} />
}

Workspace.propTypes = {
  workspaces: PropTypes.array,
  workspaceId: PropTypes.string,
  Component: PropTypes.func,
}

export default Data(Workspace)
