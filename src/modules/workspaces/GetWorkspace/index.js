import React from 'react'
import PropTypes from 'prop-types'
import { GetData } from 'instruments'

import Workspace from './Workspace'

// HOC to load a workspace
const GetWorkspace = (Component, options = {}) => {
  const GetWorkspace = ({ getData, ...props }) => {
    const vars = {
      workspaceId: getData.workspaceId,
      withUsers: options.withUsers,
    }
    return <Workspace vars={vars} Component={Component} {...props} />
  }

  GetWorkspace.propTypes = {
    getData: PropTypes.object,
  }
  return GetData(GetWorkspace, { workspaceId: true })
}

export default GetWorkspace
