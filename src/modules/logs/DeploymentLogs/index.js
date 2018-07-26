import React from 'react'
import PropTypes from 'prop-types'
import List from '../List'
import { samples } from './words'

// add search

class DeploymentLogs extends React.Component {
  timeout = null
  getLog = () => samples[Math.floor(Math.random() * samples.length)]
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
    const timer = () =>
      setTimeout(() => {
        const log = this.genLog()
        const logs = this.state.logs
        logs.push(log)
        this.setState({ logs })
        this.timeout = timer()
      }, Math.random() * 10000)
    this.timeout = timer()
  }
  genLog() {
    let log = ''

    log = this.getLog()
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
