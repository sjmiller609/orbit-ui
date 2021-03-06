import React from 'react'
import PropTypes from 'prop-types'

import { CardDelete, B } from 'instruments'

import { default as Mutate } from '../Data/DeleteInvite'

const DeleteInvite = ({ user, onSubmit, canUpdateIam }) => {
  const name = user.fullName || user.email || user[0].email
  let text = `Warning! This cannot be undone. ${name} will be permanently removed and all access revoked.`
  let noDelete = !canUpdateIam

  return (
    <CardDelete
      title="Cancel Invitation"
      text={text}
      disabled={noDelete}
      confirm={{
        text: (
          <span>
            Are you sure you want to cancel the invite for&nbsp;
            <B>{name}</B>?
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

DeleteInvite.propTypes = {
  onSubmit: PropTypes.func,
  user: PropTypes.object,
  canUpdateIam: PropTypes.bool,
  admin: PropTypes.bool,
}

export default Mutate(DeleteInvite)
