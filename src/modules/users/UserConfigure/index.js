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
  constructor(props) {
    super(props)
    this.state = {
      role: this.getRole(props),
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.user != this.props.user) {
      this.updateRole(this.props)
    }
  }

  updateRole = newProps => this.setState({ role: this.getRole(newProps) })

  getRole = props => {
    if (this.isInvite(props.user)) {
      return props.user.role
    }

    if (props.getData.workspaceId) {
      return find(props.user.roleBindings, {
        workspace: { id: props.getData.workspaceId },
      }).role
    }
  }

  isInvite(user) {
    if (user === undefined) return false
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

    let isSelf = false
    let userObject = []
    if (user) {
      isSelf = self.user.id === user.id
      userObject = this.isInvite(user)
        ? this.mapInviteToUser(user, workspaceId)
        : user
    }

    let canUpdateIAM = false
    if (workspace) canUpdateIAM = workspace.workspaceCapabilities.canUpdateIAM

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
          <Delete user={user} isSelf={isSelf} canUpdateIam={canUpdateIAM} />
        ) : (
          <DeleteInvite
            user={user}
            isSelf={isSelf}
            canUpdateIam={canUpdateIAM}
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
