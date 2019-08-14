import React from 'react'
import PropTypes from 'prop-types'

import { CardDelete, B } from 'instruments'

import { default as Mutate } from '../Data/Remove'
import GetWorkspace from 'modules/workspaces/GetWorkspace'

const Delete = ({
  users,
  user,
  onSubmit,
  workspace,
  isSelf,
  canUpdateIam,
  admin,
}) => {
  const level = admin ? 'platform' : 'workspace'
  let noDelete

  let who = isSelf
    ? 'You'
    : user.fullName
      ? user.fullName
      : user.emails
        ? user.emails[0].address
        : user.email

  let text = `Warning! This cannot be undone. ${who} will be permanently removed from this ${level} and all access revoked.`

  if (
    workspace.users.length === 1 ||
    (users != undefined && users.length === 1) ||
    canUpdateIam === false
  ) {
    noDelete = true
    text = `To remove yourself from this ${level}, you must first add another admin to the ${level}.`
  }

  if (canUpdateIam === false && admin != true) {
    noDelete = true
    text = `You do not have the appropriate permissions to delete users from this ${level}.`
  }

  return (
    <CardDelete
      title={`Remove from ${admin ? 'Platform' : 'Workspace'}`}
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
  users: PropTypes.object,
  isSelf: PropTypes.bool,
  canUpdateIam: PropTypes.bool,
  admin: PropTypes.bool,
}

export default GetWorkspace(Mutate(Delete), { withUsers: true })
