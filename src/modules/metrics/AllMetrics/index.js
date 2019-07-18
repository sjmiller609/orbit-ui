import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Row, Box } from 'instruments'

import s from '../Components/styles.scss'

import Data from '../Data'
import Since from '../Components/Since'
import AddGroup from '../Components/AddGroup'

// Metric Groups
import DeploymentStatus from '../Components/Group/DeploymentStatus'
import DeploymentTasks from '../Components/Group/DeploymentTasks'
import DeploymentDatabase from '../Components/Group/DeploymentDatabase'
import DeploymentScheduler from '../Components/Group/DeploymentScheduler'
import DeploymentQuotas from '../Components/Group/DeploymentQuotas'
import DeploymentUsage from '../Components/Group/DeploymentUsage'

class AllMetrics extends React.Component {
  state = {
    metrics: [],
    loading: true,
    since: [],
    types: {},
  }

  componentDidUpdate(prevProps) {
    if (prevProps != this.props) {
      this.updateData(this.props)
    }
  }

  componentWillMount() {
    this.updateData(this.props)
  }

  updateData = props =>
    this.setState({
      metrics: props.metrics,
      since: props.since,
      loading: props.loading,
      types: props.types,
    })

  updateSince = e => {
    const { since } = this.state

    this.setState({
      loading: true,
    })

    since.set(e)
  }

  renderGraphs = (loading, metrics, since, types) => {
    const step = since.getStep() * since.get()

    return (
      <div>
        <Row className={s.row}>
          <Box className={classnames(s.col, s.filterCol)}>
            <Since get={since.get} set={e => this.updateSince(e)} />
          </Box>
        </Row>
        <DeploymentStatus metrics={metrics} loading={loading} types={types} />
        <DeploymentTasks metrics={metrics} loading={loading} types={types} />
        <DeploymentDatabase metrics={metrics} loading={loading} types={types} />
        <DeploymentScheduler
          metrics={metrics}
          loading={loading}
          types={types}
          step={step}
        />
        <DeploymentQuotas metrics={metrics} loading={loading} types={types} />
        <DeploymentUsage
          metrics={metrics}
          loading={loading}
          types={types}
          step={step}
        />
        <AddGroup types={types} />
      </div>
    )
  }

  render() {
    const { loading, metrics, since, types } = this.state
    return this.renderGraphs(loading, metrics, since, types)
  }
}

AllMetrics.propTypes = {
  metrics: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  loading: PropTypes.bool,
  types: PropTypes.object,
  deploymentUuid: PropTypes.string,
}

export default Data(AllMetrics)
