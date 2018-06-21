import React from 'react'
import PropTypes from 'prop-types'
import GetTeam from '../GetTeam'
import Module from '../../app/Module'
import Configure from '../Configure'

class Settings extends React.Component {
  menu = {
    nav: 'team',
  }

  render() {
    const { team } = this.props

    // Error handled
    if (!team) return <Module nada />

    return (
      <Module metaTitle={'Settings | ' + team.label} menu={this.menu}>
        <Configure team={team} />
      </Module>
    )
  }
}

Settings.propTypes = {
  team: PropTypes.object,
}

export default GetTeam(Settings)
