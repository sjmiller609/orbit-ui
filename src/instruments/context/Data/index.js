import React from 'react'
import PropTypes from 'prop-types'

import { GetContext, SetContext } from './Context'
import storage from '../../../helpers/storage'

class Provider extends React.Component {
  setTeam = this.setTeam.bind(this)
  setUser = this.setUser.bind(this)

  state = {
    teamId: storage.getItem('teamId'), // string
    userId: null, // string
  }

  set = {
    teamId: this.setTeam,
    userId: this.setUser,
  }

  setUser(userId) {
    this.setState({ userId })
  }

  setTeam(teamId) {
    this.setState({ teamId })
    if (teamId !== storage.getItem('teamId')) {
      storage.setItem('teamId', teamId)
    }
  }

  render() {
    return (
      <SetContext.Provider value={this.set}>
        <GetContext.Provider value={this.state}>
          {this.props.children}
        </GetContext.Provider>
      </SetContext.Provider>
    )
  }
}

Provider.propTypes = {
  children: PropTypes.element,
}

export default Provider
