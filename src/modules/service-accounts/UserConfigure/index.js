import React from 'react'
import PropTypes from 'prop-types'

import Configure from './Configure'
import Delete from './Delete'
import Self from 'modules/self/Data'

const UserConfigure = ({ self, user }) => {
  const isSelf = self.id === user.id
  return (
    <React.Fragment>
      <Configure user={user} data={user} />
      <Delete user={user} isSelf={isSelf} />
    </React.Fragment>
  )
}

UserConfigure.propTypes = {
  user: PropTypes.object,
  self: PropTypes.object,
}

export default Self(UserConfigure)
