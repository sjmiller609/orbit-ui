import React from 'react'
import PropTypes from 'prop-types'
import Module from './Module'

class Pending extends React.Component {
  menu = {
    home: '/users',
  }

  render() {
    const { match, location } = this.props
    const id = decodeURIComponent(match.params.id)
    this.menu.level2 = {
      text: id,
      to: location.pathname,
    }
    this.menu.subMenu = [
      {
        text: 'Configure Access',
        to: match.url + '/configure',
      },
    ]

    const vars = {
      email: id,
    }
    return <Module title="Configure Access" menu={this.menu} vars={vars} />
  }
}

Pending.propTypes = {
  location: PropTypes.object,
  match: PropTypes.object,
}

export default Pending
