import React from 'react'
import PropTypes from 'prop-types'
import AllMetrics from '../AllMetrics'
import OverviewMetrics from '../OverviewMetrics'
import { withRouter } from 'react-router-dom'

const groups = [
  'DEPLOYMENT_STATUS',
  'DEPLOYMENT_TASKS',
  'DEPLOYMENT_DATABASE',
  'DEPLOYMENT_SCHEDULER',
  'DEPLOYMENT_QUOTAS',
  'DEPLOYMENT_USAGE',
]

class DeploymentMetrics extends React.Component {
  initStorage = () => localStorage.getItem('subscribedMetrics')

  state = {
    since: 30,
    step: 5,
    types:
      this.initStorage() != undefined
        ? this.initStorage().split(',')
        : [groups[0]],
  }

  setSince = since => {
    let step = this.state.step

    // switch by minutes
    switch (since) {
      case 15:
        step = 5
        break
      case 30:
        step = 5
        break
      case 60:
        step = 10
        break
      case 180:
        step = 60
        break
      case 360:
        step = 120
        break
      case 720:
        step = 240
        break
      case 1440:
        step = 480
        break
      case 2880:
        step = 960
        break
      case 10080:
        step = 3360
        break
      case 20160:
        step = 6720
        break
      default:
        step = 5
        break
    }

    this.setState({ since, step })
  }

  setTypes = type => {
    const { types } = this.state

    let exists = false
    if (types.length > 0) {
      exists = types.includes(type)
    }

    if (exists) {
      localStorage.setItem('subscribedMetrics', types.filter(c => c !== type))
      return this.setState({
        types: types.filter(c => c !== type),
      })
    } else {
      localStorage.setItem('subscribedMetrics', [...this.state.types, type])
      return this.setState(prevState => ({
        types: [...prevState.types, type],
      }))
    }
  }

  render() {
    const { deployment, overview } = this.props

    if (overview) {
      return (
        <OverviewMetrics
          deploymentUuid={deployment.id}
          since={{
            set: this.setSince,
            get: () => this.state.since,
            getStep: () => this.state.step,
          }}
          types={{
            get: this.state.types,
            set: this.setTypes,
            all: groups,
          }}
        />
      )
    }

    return (
      <AllMetrics
        deploymentUuid={deployment.id}
        since={{
          set: this.setSince,
          get: () => this.state.since,
          getStep: () => this.state.step,
        }}
        types={{
          get: () => this.state.types,
          set: this.setTypes,
          all: groups,
        }}
      />
    )
  }
}

DeploymentMetrics.propTypes = {
  location: PropTypes.object,
  deployment: PropTypes.object,
  overview: PropTypes.bool,
}

export default withRouter(DeploymentMetrics)
