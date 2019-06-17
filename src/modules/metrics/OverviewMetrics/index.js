import React from 'react'
import PropTypes from 'prop-types'
import { findIndex } from 'lodash'
import { Card, Row, Box } from 'instruments'

import s from '../Components/styles.scss'

import Data from '../Data'
import MetricContainer from '../Components/MetricContainer'

class OverviewMetrics extends React.Component {
  state = {
    metrics: [],
    loading: true,
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
    this.setState({ metrics: props.metrics, loading: props.loading })

  renderGraphs = (loading, metrics) => {
    return (
      <div>
        <Card header="Task Overview">
          <Row>
            <Box className={s.col}>
              <MetricContainer
                loading={loading}
                metric={[
                  metrics[findIndex(metrics, ['label', 'queuedTasks'])],
                  metrics[findIndex(metrics, ['label', 'runningTasks'])],
                  metrics[findIndex(metrics, ['label', 'successfulTasks'])],
                  metrics[findIndex(metrics, ['label', 'failedTasks'])],
                ]}
                type="stream"
              />
            </Box>
          </Row>
        </Card>
      </div>
    )
  }

  render() {
    const { loading, metrics } = this.state
    return this.renderGraphs(loading, metrics)
  }
}

OverviewMetrics.propTypes = {
  metrics: PropTypes.array,
  loading: PropTypes.bool,
  deploymentUuid: PropTypes.string,
}

export default Data(OverviewMetrics)
