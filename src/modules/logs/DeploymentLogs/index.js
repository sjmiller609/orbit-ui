import React from 'react'
import PropTypes from 'prop-types'
import List from '../List'
import { withRouter } from 'react-router-dom'
import { get } from 'lodash'

class DeploymentLogs extends React.Component {
  timeout = null
  setStart = this.setStart.bind(this)
  setComponent = this.setComponent.bind(this)
  state = {
    search: '',
    start: null,
    since: 5,
    component: 'scheduler',
  }
  // search obj constants
  search = {
    delay: true,
    placeholder: 'Search Logs',
    call: search => this.setState({ search }),
  }

  componentWillMount() {
    const date = new Date()
    date.setMinutes(date.getMinutes() - 5)
    this.setState({ start: date })
  }

  setStart(start) {
    let date = new Date()

    if (typeof start === 'number') {
      date.setMinutes(date.getMinutes() - start)
    } else if (start === 'today') date.setHours(0, 0, 0, 0)
    else if (start === 'all') date = null
    this.setState({ start: date, since: start })
  }

  setComponent(component) {
    this.setState({ component })
  }

  render() {
    const { search, start, since, component } = this.state
    const { deployment } = this.props
    return (
      <List
        search={{
          text: search,
          ...this.search,
        }}
        component={{
          text: component,
          set: this.setComponent,
          executor: get(deployment, 'config.executor'),
        }}
        since={{
          set: this.setStart,
          get: start,
          since,
        }}
        deploymentUuid={deployment.id}
      />
    )
  }
}

DeploymentLogs.propTypes = {
  location: PropTypes.object,
  deployment: PropTypes.object,
}

export default withRouter(DeploymentLogs)
