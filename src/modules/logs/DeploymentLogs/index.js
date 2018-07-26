import React from 'react'
import PropTypes from 'prop-types'
import List from '../List'
import { words } from './words'

// add search

class DeploymentLogs extends React.Component {
  getWord = () => words[Math.floor(Math.random() * words.length)]
  state = {
    logs: [],
    search: '',
  }
  // search obj constants
  search = {
    delay: false,
    placeholder: 'Search Logs',
    call: search => this.setState({ search }),
  }
  componentWillMount() {
    const log = this.genLog()
    const logs = this.state.logs
    logs.push(log)
    this.setState({ logs })
  }
  genLog() {
    const count = Math.floor(Math.random() * 200)
    let log = ''
    for (let i = 0; i < count; i++) {
      if (i > 0) {
        const r = Math.floor(Math.random() * 100)
        if (r < 10) log += '. '
        else log += ' '
      }
      log += this.getWord()
    }
    log += '.'
    return {
      date: new Date(),
      log,
    }
  }
  render() {
    const { deployment } = this.props
    const { logs, search } = this.state
    return (
      <List
        deployment={deployment}
        logs={logs}
        search={{
          text: search,
          ...this.search,
        }}
      />
    )
  }
}

DeploymentLogs.propTypes = {
  deployment: PropTypes.object,
}

export default DeploymentLogs
