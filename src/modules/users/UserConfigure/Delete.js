import React from 'react'
import PropTypes from 'prop-types'

import { CardDelete, B } from 'instruments'

import { default as Mutate } from '../Data/Remove'

const Delete = ({ user, onSubmit }) => {
  return (
    <CardDelete
      title="Remove from Team"
      text="Warning! This cannot be undone. The user will be permanently removed from this team and all access revoked."
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
}

export default Mutate(Delete)
