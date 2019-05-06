import React from 'react'
import PropTypes from 'prop-types'

import Configure from './Configure'
import Delete from './Delete'
import DeleteInvite from './DeleteInvite'
import Self from 'modules/self/Data'
import UpdateRole from '../Data/UpdateRole'
import PermissionsBlocker from './PermissionsBlocker'

const UpdateConfig = UpdateRole(Configure)

class UserConfigure extends React.Component {
  updateRole = this.updateRole.bind(this)
  state = {
    role: this.props.user.role,
  }

  updateRole(role) {
    if (role != this.state.role) {
      this.setState({ role })
    }
  }

  render() {
    // console.log(this.props.user)
    // console.log(this.props.user.role)
    // console.log(this.props.workspaceId)
    const { self, user, pending, workspaceId } = this.props
    console.log(user)
    const { role } = this.state
    const isSelf = self.user.id === user.id
    if (self.user.roleBindings[0].role == 'WORKSPACE_ADMIN') {
      return (
        <React.Fragment>
          <Configure
            user={user}
            data={user}
            role={{
              text: role,
              set: this.updateRole,
            }}
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
          <PermissionsBlocker />
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
}

export default Self(UserConfigure)
