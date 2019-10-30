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

    const menu = {
      nav: 'admin',
      level1: {
        selected: {
          to: '/admin',
          text: 'Admin',
        },
        list: [],
        addNew: {},
      },
      level2: {
        text: id,
      },
    }

    return (
      <Module title="Configure Access" menu={menu} vars={vars} admin={true} />
    )
  }
}

User.propTypes = {
  location: PropTypes.object,
  match: PropTypes.object,
}

export default User
