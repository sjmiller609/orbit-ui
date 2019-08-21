import React from 'react'
import PropTypes from 'prop-types'
import Module from './Module'
import { GetData } from 'instruments'

class User extends React.Component {
  menu = {
    home: '/users',
  }

  render() {
    const { match, location, getData } = this.props
    const username = decodeURIComponent(match.params.id)
    this.menu.level2 = {
      text: username,
      to: location.pathname,
    }
    this.menu.subMenu = [
      {
        text: 'Configure Access',
        to: match.url + '/configure',
      },
    ]

    const vars = {
      workspaceId: getData.workspaceId,
      username,
    }

    return <Module title="Configure Access" menu={this.menu} vars={vars} />
  }
}

User.propTypes = {
  location: PropTypes.object,
  match: PropTypes.object,
  getData: PropTypes.object,
}

export default GetData(User, { workspaceId: true })
