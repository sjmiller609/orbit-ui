import React from 'react'
import PropTypes from 'prop-types'

import Configure from './Configure'
import Delete from './Delete'
import DeleteInvite from './DeleteInvite'
import Self from 'modules/self/Data'
import UpdateRole from '../Data/UpdateRole'

class UserConfigure extends React.Component {
  state = {
    role: this.props.user.roleBindings[0].role,
  }

  updateRole(role) {
    this.setState({ role })
  }

  render() {
    console.log(this.props.user.roleBindings)
    console.log(this.props.workspaceId)
    const { self, user, pending, workspaceId } = this.props
    const isSelf = self.user.id === user.id
    return (
      <React.Fragment>
        <Configure
          user={user}
          data={user}
          role={{
            text: this.state.role,
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
  }
}

UserConfigure.propTypes = {
  user: PropTypes.object,
  self: PropTypes.object,
  pending: PropTypes.bool,
  workspaceId: PropTypes.string,
}

export default UpdateRole(Self(UserConfigure))
