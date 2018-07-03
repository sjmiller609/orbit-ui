import React from 'react'
import PropTypes from 'prop-types'
import Module from './Module'

class User extends React.Component {
  menu = {
    home: '/user',
  }

  render() {
    const { match, location } = this.props
    const id = match.params.id

    this.menu.level2 = {
      text: id,
      to: location.pathname,
    }
    this.menu.subMenu = [
      {
        text: 'Overview',
        to: match.url,
      },
      {
        text: 'Configure',
        to: match.url + '/configure',
      },
    ]

    const vars = {
      username: id,
    }
    return <Module title="Configure" menu={this.menu} vars={vars} />
  }
}

User.propTypes = {
  location: PropTypes.object,
  match: PropTypes.object,
}

export default User
