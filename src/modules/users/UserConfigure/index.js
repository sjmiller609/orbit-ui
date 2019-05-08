import React from 'react'
import PropTypes from 'prop-types'

import Configure from './Configure'
import Delete from './Delete'
import DeleteInvite from './DeleteInvite'
import Self from 'modules/self/Data'
import UpdateRole from '../Data/UpdateRole'
import PermissionsBlocker from './PermissionsBlocker'
import { GetData } from 'instruments'
import { findIndex } from 'lodash'

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
    const { self, user, pending, getData } = this.props
    // console.log(self)
    const workspaceId = getData.workspaceId
    const { role } = this.state
    const isSelf = self.user.id === user.id
    // console.log(isSelf)
    // console.log(user)
    // let userObject = (isSelf===true) ? ""

    function restructure(user) {
      if (isSelf == false) {
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

    let userObject = isSelf === true ? user : restructure(user)
    console.log(self)

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

    console.log(hasPermissions)

    if (hasPermissions == true) {
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
  getData: PropTypes.object,
}

export default GetData(Self(UserConfigure, { workspaceId: true }))
