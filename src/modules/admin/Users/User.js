import React from 'react'
import PropTypes from 'prop-types'
import Module from '../../users/User/Module'

class User extends React.Component {
  render() {
    const { match } = this.props
    const id = decodeURIComponent(match.params.id)

    const vars = {
      username: id,
    }

    return (
      <Module
        title="Configure Access"
        menu={this.menu}
        vars={vars}
        admin={true}
      />
    )
  }
}

User.propTypes = {
  location: PropTypes.object,
  match: PropTypes.object,
}

export default User
