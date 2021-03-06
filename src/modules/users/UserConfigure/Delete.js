import React from 'react'
import PropTypes from 'prop-types'

import { CardDelete, B } from 'instruments'

import { default as Mutate } from '../Data/Remove'
import GetWorkspace from 'modules/workspaces/GetWorkspace'

const Delete = ({ user, onSubmit, workspace, isSelf, canUpdateIam }) => {
  const level = workspace ? 'Workspace' : 'Platform'

  let noDelete

  let who = isSelf
    ? 'You'
    : user.fullName
      ? user.fullName
      : user.emails
        ? user.emails[0].address
        : user.email

  let text = `Warning! This cannot be undone. ${who} will be permanently removed from this ${level} and all access revoked.`

  if ((workspace && workspace.users.length === 1) || canUpdateIam === false) {
    noDelete = true
    text = `To remove yourself from this ${level}, you must first add another admin to the ${level}.`
  }

  if (canUpdateIam === false) {
    noDelete = true
    text = `You do not have the appropriate permissions to delete users from this ${level}.`
  }

  return (
    <CardDelete
      title={`Remove from ${level}`}
      text={text}
      disabled={noDelete}
      confirm={{
        text: (
          <span>
            Are you sure you want to remove&nbsp;
            <B>{user.username}</B>
            &nbsp;from this {level}?
          </span>
        ),
      }}
      onSubmit={() => {
        onSubmit({
          id: user.id || user[0].id,
        })
      }}
    />
  )
}

Delete.propTypes = {
  onSubmit: PropTypes.func,
  user: PropTypes.object,
  workspace: PropTypes.object,
  users: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  isSelf: PropTypes.bool,
  canUpdateIam: PropTypes.bool,
}

export default GetWorkspace(Mutate(Delete), { withUsers: true })
