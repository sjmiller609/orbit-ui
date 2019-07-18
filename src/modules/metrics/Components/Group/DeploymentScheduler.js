import React from 'react'
import PropTypes from 'prop-types'
import { findIndex } from 'lodash'
import { Card, Row, Box } from 'instruments'

import s from '../styles.scss'

import MetricContainer from '../MetricContainer'
import RemoveGroup from '../RemoveGroup'

// Define group type enum
const type = 'DEPLOYMENT_SCHEDULER'

class DeploymentScheduler extends React.Component {
  render() {
    const { loading, metrics, step, types } = this.props
    const keys = types.get()

    if (metrics.length > 0 && keys.includes(type)) {
      return (
        <Card header="Scheduler">
          <RemoveGroup types={types} type={type} />
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
                step={step}
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
                step={step}
                range
              />
            </Box>
          </Row>
        </Card>
      )
    }

    return null
  }
}

DeploymentScheduler.propTypes = {
  metrics: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  loading: PropTypes.bool,
  step: PropTypes.number,
  types: PropTypes.object,
}

export default DeploymentScheduler
