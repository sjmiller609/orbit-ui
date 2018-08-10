import React from 'react'
import PropTypes from 'prop-types'

import { GetContext, SetContext } from './Context'
import storage from '../../../helpers/storage'
import auth from '../../../helpers/token'

class Provider extends React.Component {
  setWorkspace = this.setWorkspace.bind(this)
  setAuth = this.setAuth.bind(this)

  state = {
    workspaceId: storage.getItem('workspaceId'), // string
    auth: null,
  }

  set = {
    workspaceId: this.setWorkspace,
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
      this.setWorkspace(null)
      return
    }

    this.setState({ auth: true })
    auth.set({ token, exp })
  }

  setWorkspace(workspaceId) {
    this.setState({ workspaceId })
    if (workspaceId !== storage.getItem('workspaceId')) {
      if (!workspaceId) storage.removeItem('workspaceId')
      else storage.setItem('workspaceId', workspaceId)
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
