import React from 'react'
import PropTypes from 'prop-types'

import Configure from './Configure'
import Module from '../../app/Module'

class New extends React.Component {
  // state for entire module
  state = {
    title: 'Invite to Workspace',
    menu: {
      home: '/users',
    },
    admin: false,
  }

  componentWillMount() {
    const admin = /admin/.test(self.location.href)

    if (admin) {
      this.setState({
        title: 'Invite to Platform',
        menu: {
          nav: 'admin',
        },
        admin: true,
      })
    }
  }

  render() {
    const { menu, title, admin } = this.state

    menu.level2 = {
      text: '',
      to: this.props.location.pathname,
    }

    return (
      <Module metaTitle={title} menu={menu}>
        <Configure title={title} admin={admin} />
      </Module>
    )
  }
}

New.propTypes = {
  location: PropTypes.object,
}

export default New
