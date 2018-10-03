import React from 'react'
import PropTypes from 'prop-types'

import Configure from './Configure'
import Delete from './Delete'
import DeleteInvite from './DeleteInvite'
import Self from 'modules/self/Data'

const UserConfigure = ({ self, user, pending }) => {
  console.log(user)
  const isSelf = self.user.id === user.id
  return (
    <React.Fragment>
      <Configure user={user} data={user} />
      {!pending ? (
        <Delete user={user} isSelf={isSelf} />
      ) : (
        <DeleteInvite user={user} />
      )}
    </React.Fragment>
  )
}

UserConfigure.propTypes = {
  user: PropTypes.object,
  self: PropTypes.object,
  pending: PropTypes.bool,
}

export default Self(UserConfigure)
