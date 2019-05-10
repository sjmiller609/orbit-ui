import React from 'react'
import PropTypes from 'prop-types'

import Configure from './Configure'
import Delete from './Delete'
import DeleteInvite from './DeleteInvite'
import Self from 'modules/self/Data'
import PermissionsBlocker from './PermissionsBlocker'
import { GetData } from 'instruments'
import { find } from 'lodash'
import Data from '../../workspaces/Data'

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
    const { self, user, pending, getData, workspaces } = this.props

    const workspaceId = getData.workspaceId
    const workspace = workspaces.find(
      workspace => workspace && workspace.id === workspaceId
    )
    const { role } = this.state
    const isSelf = self.user.id === user.id

    const msg1 = 'You cannot edit your own permissions.'
    const msg2 =
      'You do not have the appropriate permissions to access this feature.'
    let msg = isSelf == true ? msg1 : msg2

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

    const editPermissions = workspace.workspaceCapabilities.editPermissions

    const disabled = !editPermissions || isSelf
    console.log(userObject)
    if (editPermissions == true && isSelf == false) {
      // MVP - this will change once I have tim eto rework the component to disable the delete function based on the editPermissions stuff
      return (
        <React.Fragment>
          <Configure
            user={user}
            data={{
              workspaceId: workspaceId,
              email: userObject.emails[0].address, //I think this is ok, but are there situations where users have multiple email addresses associated with their userId?
              role: role,
            }}
            role={{
              text: role,
              set: this.updateRole,
            }}
            disabled={disabled}
          />
          {!pending ? (
            <Delete user={user} isSelf={isSelf} />
          ) : (
            <DeleteInvite
              user={user}
              isSelf={workspace.workspaceCapabilities.editPermissions}
            />
          )}
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          {/* <PermissionsBlocker msg={msg} /> */}
          <Configure
            user={user}
            data={{
              workspaceId: workspaceId,
              email: userObject.emails[0].address,
              role: role,
            }}
            role={{
              text: role,
              set: this.updateRole,
            }}
            disabled={disabled}
          />
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
  workspaces: PropTypes.array,
}

export default Data(GetData(Self(UserConfigure, { workspaceId: true })))
