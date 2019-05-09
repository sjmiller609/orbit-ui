import React from 'react'
import PropTypes from 'prop-types'

import Configure from './Configure'
import Delete from './Delete'
import DeleteInvite from './DeleteInvite'
import Self from 'modules/self/Data'
import PermissionsBlocker from './PermissionsBlocker'
import { GetData } from 'instruments'
import { find } from 'lodash'

class UserConfigure extends React.Component {
  updateRole = this.updateRole.bind(this)

  state = {
    role: this.findRole(),
  }

  updateRole(role) {
    if (role != this.state.role) {
      this.setState({ role })
    }
  }

  findRole() {
    if (this.props.user.__typename == 'Invite') {
      return this.props.user.role
    } else {
      return find(this.props.user.roleBindings, {
        workspace: { id: this.props.getData.workspaceId },
      }).role
    }
  }

  render() {
    const { self, user, pending, getData } = this.props
    const workspaceId = getData.workspaceId
    const { role } = this.state
    const isSelf = self.user.id === user.id

    const msg1 = 'You cannot edit your own permissions.'
    const msg2 =
      'You do not have the appropriate permissions to access this feature.'
    let msg = isSelf == true ? msg1 : msg2

    console.log(msg)

    function restructure(user) {
      if (user.__typename == 'Invite') {
        const restructuredObject = {
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
        return restructuredObject
      }
    }

    let userObject = user.__typename == 'Invite' ? restructure(user) : user
    // console.log(userObject)

    let hasPermissions = false
    const roleBindingsArray = self.user.roleBindings
    const roleBindingsArrayLength = roleBindingsArray.length
    // console.log(user)
    for (let i = 0; i < roleBindingsArrayLength; i++) {
      if (
        roleBindingsArray[i].role == 'SYSTEM_ADMIN' ||
        (roleBindingsArray[i].workspace.id == workspaceId &&
          roleBindingsArray[i].role == 'WORKSPACE_ADMIN')
      ) {
        hasPermissions = true
      }
    }

    if (hasPermissions == true && isSelf == false) {
      return (
        <React.Fragment>
          <Configure
            user={user}
            data={userObject}
            role={{
              text: role,
              set: this.updateRole,
            }}
            workspaceId={workspaceId}
          />
          {!pending ? (
            <Delete user={user} isSelf={isSelf} />
          ) : (
            <DeleteInvite user={user} />
          )}
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <PermissionsBlocker msg={msg} />
        </React.Fragment>
      )
    }
  }
}

UserConfigure.propTypes = {
  user: PropTypes.object,
  self: PropTypes.object,
  pending: PropTypes.bool,
  workspaceId: PropTypes.string,
  getData: PropTypes.object,
}

export default GetData(Self(UserConfigure, { workspaceId: true }))
