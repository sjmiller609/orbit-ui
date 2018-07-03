import React from 'react'
import PropTypes from 'prop-types'

import Configure from './Configure'
import Delete from './Delete'

const UserConfigure = ({ user }) => {
  return (
    <React.Fragment>
      <Configure user={user} data={user} />
      <Delete user={user} />
    </React.Fragment>
  )
}

UserConfigure.propTypes = {
  user: PropTypes.object,
}

export default UserConfigure
