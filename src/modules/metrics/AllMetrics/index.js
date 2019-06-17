import React from 'react'
import PropTypes from 'prop-types'
import { findIndex } from 'lodash'
import classnames from 'classnames'
import { Card, Row, Box } from 'instruments'

import s from '../Components/styles.scss'

import Data from '../Data'
import MetricContainer from '../Components/MetricContainer'
import Since from '../Components/Since'

class AllMetrics extends React.Component {
  state = {
    metrics: [],
    loading: true,
    since: [],
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
    })

  updateSince = e => {
    const { since } = this.state

    this.setState({
      loading: true,
    })

    since.set(e)
  }

  renderGraphs = (loading, metrics, since) => {
    return (
      <div>
        <Row className={s.row}>
          <Box className={classnames(s.col, s.filterCol)}>
            <Since get={since.get} set={e => this.updateSince(e)} />
          </Box>
        </Row>
        <Card>
          <Row>
            <Box className={s.col}>
              <MetricContainer
                loading={loading}
                title="Deployment Status"
                metric={
                  metrics[findIndex(metrics, ['label', 'deploymentStatus'])]
                }
                type="health"
              />
            </Box>
            <Box className={s.col}>
              <MetricContainer
                loading={loading}
                title="Scheduler Heartbeat"
                metric={
                  metrics[findIndex(metrics, ['label', 'schedulerHeartbeat'])]
                }
                type="health"
              />
            </Box>
          </Row>
        </Card>
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
        <Card header="Quotas">
          <Row>
            <Box className={s.col}>
              <MetricContainer
                loading={loading}
                title="Max Pods"
                metric={metrics[findIndex(metrics, ['label', 'maxPods'])]}
                type="count"
                label="pods"
              />
              <MetricContainer
                loading={loading}
                title="Running Pods"
                metric={metrics[findIndex(metrics, ['label', 'runningPods'])]}
                type="gauge"
              />
            </Box>
            <Box className={s.col}>
              <MetricContainer
                loading={loading}
                title="Max CPU"
                metric={metrics[findIndex(metrics, ['label', 'cpuMax'])]}
                type="count"
                label="cores"
              />
              <MetricContainer
                loading={loading}
                title="Reserved CPU"
                metric={metrics[findIndex(metrics, ['label', 'reservedCPU'])]}
                type="gauge"
              />
            </Box>
            <Box className={s.col}>
              <MetricContainer
                loading={loading}
                title="Max Memory"
                metric={metrics[findIndex(metrics, ['label', 'memoryMax'])]}
                type="count"
                label="GB"
              />
              <MetricContainer
                loading={loading}
                title="Reserved Memory"
                metric={
                  metrics[findIndex(metrics, ['label', 'reservedMemory'])]
                }
                type="gauge"
              />
            </Box>
          </Row>
        </Card>
        <Card header="Scheduler">
          <Row>
            <Box className={s.col}>
              <MetricContainer
                loading={loading}
                title="Schedular Heartbeat"
                metric={metrics[findIndex(metrics, ['label', 'heartbeat'])]}
                type="sparkline"
                range
              />
            </Box>
            <Box className={s.col}>
              <MetricContainer
                loading={loading}
                title="Dagbag Size"
                metric={metrics[findIndex(metrics, ['label', 'dagCount'])]}
                type="sparkline"
                range
              />
            </Box>
            <Box className={s.col}>
              <MetricContainer
                loading={loading}
                title="Zombies Killed"
                metric={metrics[findIndex(metrics, ['label', 'zombieCount'])]}
                type="sparkline"
                range
              />
            </Box>
            <Box className={s.col}>
              <MetricContainer
                loading={loading}
                title="Successful Tasks"
                metric={
                  metrics[findIndex(metrics, ['label', 'taskSuccessCount'])]
                }
                type="sparkline"
                range
              />
            </Box>
            <Box className={s.col}>
              <MetricContainer
                loading={loading}
                title="Failed Tasks"
                metric={metrics[findIndex(metrics, ['label', 'taskFailCount'])]}
                type="sparkline"
                range
              />
            </Box>
          </Row>
          <Row className={s.row}>
            <Box className={s.col}>
              <MetricContainer
                loading={loading}
                title="Task Success Rate"
                metric={
                  metrics[findIndex(metrics, ['label', 'taskSuccessRate'])]
                }
                label="ops"
                type="complexline"
                range
              />
            </Box>
            <Box className={s.col}>
              <MetricContainer
                loading={loading}
                title="Task Fail Rate"
                metric={metrics[findIndex(metrics, ['label', 'taskFailRate'])]}
                type="complexline"
                label="ops"
                range
              />
            </Box>
          </Row>
        </Card>
        <Card header="Database Connections">
          <Row>
            <Box className={s.col}>
              <MetricContainer
                loading={loading}
                title="Total Database Connections"
                metric={
                  metrics[
                    findIndex(metrics, ['label', 'totalDatabaseConnections'])
                  ]
                }
                type="sparkline"
                range
              />
            </Box>
            <Box className={s.col}>
              <MetricContainer
                loading={loading}
                title="Total Waiting Clients"
                metric={
                  metrics[findIndex(metrics, ['label', 'totalWaitingClients'])]
                }
                type="sparkline"
                range
              />
            </Box>
          </Row>
        </Card>
        <Card header="Resource Utilization">
          <Row className={s.row}>
            <Box className={s.col}>
              <MetricContainer
                loading={loading}
                title="CPU Usage"
                metric={metrics[findIndex(metrics, ['label', 'cpuUsage'])]}
                type="complexline"
                label="%"
                range
              />
            </Box>
            <Box className={s.col}>
              <MetricContainer
                loading={loading}
                title="Memory Usage"
                metric={metrics[findIndex(metrics, ['label', 'memoryUsage'])]}
                type="complexline"
                label="GB"
                range
              />
            </Box>
          </Row>
          <Row className={s.row}>
            <Box className={s.col}>
              <MetricContainer
                loading={loading}
                title="Network Rx"
                metric={metrics[findIndex(metrics, ['label', 'networkRx'])]}
                type="complexline"
                label="kB/s"
                range
              />
            </Box>
            <Box className={s.col}>
              <MetricContainer
                loading={loading}
                title="Network Tx"
                metric={metrics[findIndex(metrics, ['label', 'networkTx'])]}
                type="complexline"
                label="kB/s"
                range
              />
            </Box>
          </Row>
        </Card>
        <Card header="Core Container Status">
          <Row>
            <Box className={s.col}>
              <MetricContainer
                loading={loading}
                title="Core Container Status"
                metric={
                  metrics[findIndex(metrics, ['label', 'coreContainerStatus'])]
                }
                type="list"
              />
            </Box>
          </Row>
        </Card>
      </div>
    )
  }

  render() {
    const { loading, metrics, since } = this.state
    return this.renderGraphs(loading, metrics, since)
  }
}

AllMetrics.propTypes = {
  metrics: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  loading: PropTypes.bool,
  deploymentUuid: PropTypes.string,
}

export default Data(AllMetrics)
