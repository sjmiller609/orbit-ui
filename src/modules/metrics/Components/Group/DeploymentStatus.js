import React from 'react'
import PropTypes from 'prop-types'
import { findIndex } from 'lodash'
import { Card, Row, Box } from 'instruments'

import s from '../styles.scss'

import MetricContainer from '../MetricContainer'
import RemoveGroup from '../RemoveGroup'

// Define group type enum
const type = 'DEPLOYMENT_STATUS'

class DeploymentStatus extends React.Component {
  render() {
    const { loading, metrics, types } = this.props
    const keys = types.get()

    if (metrics.length > 0 && keys.includes(type)) {
      return (
        <Card header="Deployment Status">
          <RemoveGroup types={types} type={type} />
          <Row>
            <Box className={s.col}>
              <MetricContainer
                loading={loading}
                title="Deployment"
                metric={
                  metrics[findIndex(metrics, ['label', 'deploymentStatus'])]
                }
                type="health"
              />
            </Box>
            <Box className={s.col}>
              <MetricContainer
                loading={loading}
                title="Scheduler"
                metric={
                  metrics[findIndex(metrics, ['label', 'schedulerHeartbeat'])]
                }
                type="health"
              />
            </Box>
          </Row>
          <Row>
            <Box className={s.col}>
              <MetricContainer
                loading={loading}
                metric={
                  metrics[findIndex(metrics, ['label', 'coreContainerStatus'])]
                }
                type="list"
              />
            </Box>
          </Row>
        </Card>
      )
    }

    return null
  }
}

DeploymentStatus.propTypes = {
  metrics: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  loading: PropTypes.bool,
  types: PropTypes.object,
}

export default DeploymentStatus
