import React from 'react'
import PropTypes from 'prop-types'

import { GetContext, SetContext } from './Context'
import storage from '../../../helpers/storage'
import auth from '../../../helpers/token'

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

  componentWillMount() {
    this.setUser(auth.get())
  }

  setUser(data) {
    const t = data || {}
    const { token, exp, userId } = t
    // check if expired
    const now = Math.round(new Date().getTime() / 1000)
    if (!token || !userId || exp <= now) {
      auth.remove()
      this.setState({ userId: null })
      return
    }

    this.setState({ userId })
    auth.set({ token, exp, userId })
  }

  setTeam(teamId) {
    this.setState({ teamId })
    if (teamId !== storage.getItem('teamId')) {
      if (!teamId) storage.removeItem('teamId')
      else storage.setItem('teamId', teamId)
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
