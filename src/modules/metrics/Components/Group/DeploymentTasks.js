import React from 'react'
import PropTypes from 'prop-types'
import { findIndex } from 'lodash'
import { Card, Row, Box } from 'instruments'

import s from '../styles.scss'

import MetricContainer from '../MetricContainer'
import RemoveGroup from '../RemoveGroup'

// Define group type enum
const type = 'DEPLOYMENT_TASKS'

class DeploymentTasks extends React.Component {
  render() {
    const { loading, metrics, types } = this.props
    const keys = types.get()

    if (metrics.length > 0 && keys.includes(type)) {
      return (
        <Card header="Task Stream">
          <RemoveGroup types={types} type={type} />
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
          <Row>
            <Box className={s.col}>
              <MetricContainer
                loading={loading}
                metric={metrics[findIndex(metrics, ['label', 'taskStatus'])]}
                type="taskList"
              />
            </Box>
          </Row>
        </Card>
      )
    }

    return null
  }
}

DeploymentTasks.propTypes = {
  metrics: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  loading: PropTypes.bool,
  types: PropTypes.object,
}

export default DeploymentTasks
