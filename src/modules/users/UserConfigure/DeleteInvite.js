import React from 'react'
import PropTypes from 'prop-types'

import { CardDelete, B } from 'instruments'

import { default as Mutate } from '../Data/DeleteInvite'

const DeleteInvite = ({ user, onSubmit }) => {
  const name = user.fullName || user.email
  let text = `Warning! This cannot be undone. ${name} will be permanently removed from this workspace and all access revoked.`

  return (
    <CardDelete
      title="Cancel Invitation"
      text={text}
      confirm={{
        text: (
          <span>
            Are you sure you want to remove&nbsp;
            <B>{name}</B>
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

DeleteInvite.propTypes = {
  onSubmit: PropTypes.func,
  user: PropTypes.object,
}

export default Mutate(DeleteInvite)
