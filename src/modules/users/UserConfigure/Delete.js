import React from 'react'
import PropTypes from 'prop-types'

import { CardDelete, B } from 'instruments'

import { default as Mutate } from '../Data/Remove'
import GetWorkspace from 'modules/workspaces/GetWorkspace'

const Delete = ({ user, onSubmit, workspace }) => {
  let noDelete
  let text =
    'Warning! This cannot be undone. The user will be permanently removed from this workspace and all access revoked.'
  if (workspace.users.length === 1) {
    noDelete = true
    text =
      'To remove yourself from this workspace, you must first add another owner to the workspace.'
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
}

export default GetWorkspace(Mutate(Delete), { withUsers: true })
