import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import Overview from './Overview'
import { getParams } from 'helpers/url'

// TODO: Loading stuff is temporary until can get from houston
class DeploymentOverview extends React.Component {
  timeout = null
  state = {
    loading: false,
  }
  componentWillMount() {
    const { location, history } = this.props
    if (!location || !location.search) return
    const params = getParams(location.search)
    if (params.hasOwnProperty('loading')) this.setState({ loading: true })
    this.timeout = setTimeout(() => {
      this.setState({ loading: false })
      history.replace(location.pathname)
    }, 10000)
  }
  componentWillUnmount() {
    if (this.timeout) clearTimeout(this.timeout)
  }
  render() {
    const { deployment } = this.props
    console.log(this.state.loading)
    return (
      <React.Fragment>
        <Overview deployment={deployment} loading={this.state.loading} />
      </React.Fragment>
    )
  }
}

DeploymentOverview.propTypes = {
  deployment: PropTypes.object,
  location: PropTypes.object,
  history: PropTypes.object,
}

export default withRouter(DeploymentOverview)
