import React from 'react'
import PropTypes from 'prop-types'

import { CardDelete, B } from 'instruments'

import { default as Mutate } from '../Data/Remove'
import GetTeam from 'modules/teams/GetTeam'

const Delete = ({ user, onSubmit, team }) => {
  let noDelete
  let text =
    'Warning! This cannot be undone. The user will be permanently removed from this team and all access revoked.'
  if (team.users.length === 1) {
    noDelete = true
    text =
      'To remove yourself from this team, you must first add another owner to the team.'
  }
  return (
    <CardDelete
      title="Remove from Team"
      text={text}
      disabled={noDelete}
      confirm={{
        text: (
          <span>
            Are you sure you want to remove&nbsp;
            <B>{user.username}</B>
            &nbsp;from this team?
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
  team: PropTypes.object,
}

export default GetTeam(Mutate(Delete), { withUsers: true })
