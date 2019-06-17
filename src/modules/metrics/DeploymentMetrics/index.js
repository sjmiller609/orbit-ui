import React from 'react'
import PropTypes from 'prop-types'
import AllMetrics from '../AllMetrics'
import OverviewMetrics from '../OverviewMetrics'
import { withRouter } from 'react-router-dom'

class DeploymentMetrics extends React.Component {
  state = {
    since: 30,
    step: 15,
  }

  setSince = since => {
    let step = this.state.step

    // switch by minutes
    switch (since) {
      case 15:
        step = 15
        break
      case 30:
        step = 15
        break
      case 60:
        step = 15
        break
      case 180:
        step = 20
        break
      case 360:
        step = 30
        break
      case 720:
        step = 60
        break
      case 1440:
        step = 120
        break
      case 2880:
        step = 300
        break
      case 10080:
        step = 1200
        break
      case 20160:
        step = 1800
        break
      default:
        step = 15
        break
    }

    this.setState({ since, step })
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
