import React from 'react'
import PropTypes from 'prop-types'

import { GetContext, SetContext } from './Context'
import storage from '../../../helpers/storage'
import auth from '../../../helpers/token'

class Provider extends React.Component {
  setTeam = this.setTeam.bind(this)
  setAuth = this.setAuth.bind(this)

  state = {
    teamId: storage.getItem('teamId'), // string
    auth: null, // string
  }

  set = {
    teamId: this.setTeam,
    auth: this.setAuth,
  }

  componentWillMount() {
    this.setAuth(auth.get())
  }

  setAuth(data) {
    const t = data || {}
    const { token, exp } = t
    // check if expired
    const now = Math.round(new Date().getTime() / 1000)
    if (!token || exp <= now) {
      auth.remove()
      this.setState({ auth: false })
      this.setTeam(null)
      return
    }

    this.setState({ auth: true })
    auth.set({ token, exp })
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
