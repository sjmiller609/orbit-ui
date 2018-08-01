import React from 'react'
import PropTypes from 'prop-types'
import List from '../List'
import { withRouter } from 'react-router-dom'
// add search

class DeploymentLogs extends React.Component {
  timeout = null
  //  getLog = () => samples[Math.floor(Math.random() * samples.length)]
  state = {
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
    this.getType()

    const date = new Date()
    date.setMinutes(date.getMinutes() - 10)
    this.setState({ start: date })

    // // mock data
    // const timer = () =>
    //   setTimeout(() => {
    //     const log = this.genLog()
    //     const logs = this.state.logs
    //     logs.push(log)
    //     this.setState({ logs })
    //     this.timeout = timer()
    //   }, Math.random() * 10000)
    //   this.timeout = timer()
  }

  // componentWillUnmount() {
  //   clearTimeout(this.timeout)
  // }
  // genLog() {
  //   let log = ''
  //
  //   log = this.getLog()
  //   return {
  //     date: new Date(),
  //     log,
  //   }
  // }
  getType() {
    const { location } = this.props
    const type = location.search ? location.search.slice(1) : 'webserver'
    this.setState({ type })
  }

  render() {
    const { search, start, type } = this.state
    return (
      <List
        search={{
          text: search,
          ...this.search,
        }}
        start={start}
        type={type}
      />
    )
  }
}

DeploymentLogs.propTypes = {
  location: PropTypes.object,
}

export default withRouter(DeploymentLogs)
