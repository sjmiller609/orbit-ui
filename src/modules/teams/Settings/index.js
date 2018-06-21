import React from 'react'
import PropTypes from 'prop-types'
import Module from './Module'
import { GetData } from '../../../instruments'

class Settings extends React.Component {
  menu = {
    nav: 'team',
  }

  render() {
    const { match, location, getData } = this.props
    const vars = {
      teamId: getData.teamId,
    }
    return <Module title="Settings" menu={this.menu} vars={vars} />
  }
}

Settings.propTypes = {
  location: PropTypes.object,
  match: PropTypes.object,
  getData: PropTypes.object,
}

export default GetData(Settings, { teamId: true })
