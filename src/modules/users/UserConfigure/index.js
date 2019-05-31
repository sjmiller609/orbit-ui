import React from 'react'
import PropTypes from 'prop-types'

import Configure from './Configure'
import Delete from './Delete'
import DeleteInvite from './DeleteInvite'
import Self from 'modules/self/Data'
import { GetData } from 'instruments'
import { find } from 'lodash'
import Data from '../../workspaces/Data'

class UserConfigure extends React.Component {
  state = {
    role: this.getRole(),
  }

  getRole() {
    if (this.isInvite(this.props.user)) {
      return this.props.user.role
    }

    return find(this.props.user.roleBindings, {
      workspace: { id: this.props.getData.workspaceId },
    }).role
  }

  isInvite(user) {
    return user.__typename === 'Invite'
  }

  // XXX: We'll probably want to return actual roleBindings
  // from our invites/workspaces queries, so we can drop this.
  mapInviteToUser(user, workspaceId) {
    return {
      roleBindings: [
        {
          role: user.role,
          workspace: {
            id: workspaceId,
          },
        },
      ],
      emails: [{ address: user.email }],
    }
  }

  render() {
    const { self, user, pending, getData, workspaces } = this.props

    const workspaceId = getData.workspaceId
    const workspace = workspaces.find(
      workspace => workspace && workspace.id === workspaceId
    )
    const { role } = this.state
    const isSelf = self.user.id === user.id

    const userObject = this.isInvite(user)
      ? this.mapInviteToUser(user, workspaceId)
      : user

    const canUpdateIam = workspace.workspaceCapabilities.canUpdateIam

    // Disable the selector if the user is viewing their own permissions
    const disabled = isSelf

    return (
      <React.Fragment>
        <Configure
          user={user}
          data={{
            workspaceId: workspaceId,
            email: userObject.emails[0].address,
            role: role,
          }}
          role={role}
          disabled={disabled}
        />
        {!pending ? (
          <Delete user={user} isSelf={isSelf} canUpdateIam={canUpdateIam} />
        ) : (
          <DeleteInvite
            user={user}
            isSelf={isSelf}
            canUpdateIam={canUpdateIam}
          />
        )}
      </React.Fragment>
    )
  }
}

UserConfigure.propTypes = {
  user: PropTypes.object,
  self: PropTypes.object,
  pending: PropTypes.bool,
  workspaceId: PropTypes.string,
  getData: PropTypes.object,
  workspaces: PropTypes.array,
}

export default Data(GetData(Self(UserConfigure, { workspaceId: true })))
