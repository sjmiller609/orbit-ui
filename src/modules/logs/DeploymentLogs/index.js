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
    start: null,
    type: 'webserver',
  }
  // search obj constants
  search = {
    delay: false,
    placeholder: 'Search Logs',
    call: search => this.setState({ search }),
  }
  componentWillMount() {
    const date = new Date()
    date.setMinutes(date.getMinutes() - 10)
    this.setState({ start: date })

    // mock data
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
  componentWillUnmount() {
    clearTimeout(this.timeout)
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
    const { logs, search, start, type } = this.state
    return (
      <List
        deployment={deployment}
        logs={logs}
        search={{
          text: search,
          ...this.search,
        }}
        start={start}
        type={type}
        select={type => this.setState({ type })}
      />
    )
  }
}

DeploymentLogs.propTypes = {
  deployment: PropTypes.object,
}

export default DeploymentLogs
