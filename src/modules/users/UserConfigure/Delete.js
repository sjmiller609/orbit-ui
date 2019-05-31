import React from 'react'
import PropTypes from 'prop-types'

import { CardDelete, B } from 'instruments'

import { default as Mutate } from '../Data/Remove'
import GetWorkspace from 'modules/workspaces/GetWorkspace'

const Delete = ({ user, onSubmit, workspace, isSelf, canUpdateIam }) => {
  let noDelete
  let who = isSelf
    ? 'You'
    : user.fullName
      ? user.fullName
      : user.emails[0].address
  let text = `Warning! This cannot be undone. ${who} will be permanently removed from this workspace and all access revoked.`

  if (workspace.users.length === 1 || canUpdateIam == false) {
    noDelete = true
    text =
      'To remove yourself from this workspace, you must first add another admin to the workspace.'
  }

  if (canUpdateIam == false) {
    noDelete = true
    text =
      'You do not have the appropriate permissions to delete users from this workspace.'
  }

  return (
    <CardDelete
      title="Remove from Workspace"
      text={text}
      disabled={noDelete}
      confirm={{
        text: (
          <span>
            Are you sure you want to remove&nbsp;
            <B>{user.username}</B>
            &nbsp;from this workspace?
          </span>
        ),
      }}
      onSubmit={() => {
        onSubmit({
          id: user.id,
        })
      }}
    />
  )
}

Delete.propTypes = {
  onSubmit: PropTypes.func,
  user: PropTypes.object,
  workspace: PropTypes.object,
  isSelf: PropTypes.bool,
  canUpdateIam: PropTypes.bool,
}

export default GetWorkspace(Mutate(Delete), { withUsers: true })
