import React from 'react'
import PropTypes from 'prop-types'
import { GetData, Header } from 'instruments'
import Data from '../../workspaces/Data'
import Self from '../../self/Data'
import subMenus from './subMenus'

import { getProfile } from 'modules/users/Data/helpers'

const Nav = ({ getData, workspaces, self, menu }) => {
  const workspaceId = getData.workspaceId
  if (!workspaces) return null
  const workspace = workspaces.find(workspace => workspace.id === workspaceId)

  const level1 = {
    selected: {
      to: menu.home, //default?
      id: workspaceId,
      text: workspace ? workspace.label : 'All Workspaces',
    },
    list: workspaces,
    addNew: {
      to: '/workspaces/new',
      text: 'New Workspace',
    },
  }
  const subMenu = menu.subMenu || subMenus[menu.nav]

  const profile = getProfile(self)

  return (
    <Header
      level1={level1}
      level2={menu.level2}
      subMenu={subMenu}
      profile={profile}
    />
  )
}

Nav.propTypes = {
  getData: PropTypes.object,
  workspaces: PropTypes.array,
  self: PropTypes.object,
  menu: PropTypes.object,
}

export default GetData(Self(Data(Nav)), { workspaceId: true })
