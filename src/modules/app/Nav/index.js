import React from 'react'
import PropTypes from 'prop-types'
import { GetData, Header, HelloBar } from 'instruments'
import Data from '../../workspaces/Data'
import Self from '../../self/Data'
import subMenus from './subMenus'
import { reject, findKey } from 'lodash'
import moment from 'moment'

import { getProfile } from 'modules/users/Data/helpers'

const Nav = ({ getData, workspaces, self, menu }) => {
  const workspaceId = getData.workspaceId
  if (!workspaces) return null
  const workspace = workspaces.find(
    workspace => workspace && workspace.id === workspaceId
  )

  const isAdmin = () => {
    const hasKey = findKey(self.user.roleBindings, { role: 'SYSTEM_ADMIN' })
    if (hasKey != undefined) return true
    return false
  }

  const profile = {
    ...getProfile(self.user),
    platform: isAdmin(),
  }

  let level1 = menu.level1 || {
    selected: {
      to: menu.home, //default?
      id: workspaceId,
      text: workspace ? workspace.label : profile.name,
    },
    list: workspaces,
    addNew: {
      to: '/workspaces/new',
      text: 'New Workspace',
    },
  }

  let subMenu = menu.subMenu || subMenus(workspaceId)[menu.nav]

  if (!isAdmin() && subMenu)
    subMenu = subMenu.filter(m => !m.permissions || !m.permissions.isAdmin)

  // TODO: This logic is too specific for the generic nature
  // of this component. We should fix this.
  const canSeeBilling = workspace
    ? workspace.workspaceCapabilities.canUpdateBilling &&
      workspace.billingEnabled
    : false

  const diff = workspace ? -moment().diff(workspace.trialEndsAt, 'days') : null

  const trialRemaining = diff < 0 ? 0 : diff
  const days =
    trialRemaining == 1
      ? `is ${trialRemaining} day`
      : `are ${trialRemaining} days`

  const msg =
    workspace && workspace.billingEnabled && workspace.stripeCustomerId == null
      ? `There ${days} left in your trial.`
      : null

  subMenu = reject(
    subMenu,
    i => !canSeeBilling && i.text.toLowerCase() === 'billing'
  )

  return (
    <div>
      <HelloBar
        msg={msg}
        to={`/workspaces/${workspaceId}/billing`}
        button="Upgrade Now"
      />
      <Header
        level1={level1}
        level2={menu.level2}
        subMenu={subMenu}
        profile={profile}
      />
    </div>
  )
}

Nav.propTypes = {
  getData: PropTypes.object,
  workspaces: PropTypes.array,
  self: PropTypes.object,
  menu: PropTypes.object,
}

export default GetData(Self(Data(Nav)), { workspaceId: true })
