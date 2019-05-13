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

    const userObject = user.__typename == 'Invite' ? restructure(user) : user

    const updateIAM = workspace.workspaceCapabilities.updateIAM

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
          role={{
            text: role,
            set: this.updateRole,
          }}
          disabled={disabled}
        />
        {!pending ? (
          <Delete user={user} isSelf={isSelf} updateIAM={updateIAM} />
        ) : (
          <DeleteInvite user={user} isSelf={isSelf} updateIAM={updateIAM} />
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
