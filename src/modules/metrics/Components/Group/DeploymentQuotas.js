import React from 'react'
import PropTypes from 'prop-types'
import { findIndex } from 'lodash'
import { Card, Row, Box } from 'instruments'

import s from '../styles.scss'

import MetricContainer from '../MetricContainer'
import RemoveGroup from '../RemoveGroup'

// Define group type enum
const type = 'DEPLOYMENT_QUOTAS'

class DeploymentQuotas extends React.Component {
  render() {
    const { loading, metrics, types } = this.props
    const keys = types.get()

    if (metrics.length > 0 && keys.includes(type)) {
      return (
        <Card header="Quotas">
          <RemoveGroup types={types} type={type} />
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
      )
    }

    return null
  }
}

DeploymentQuotas.propTypes = {
  metrics: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  loading: PropTypes.bool,
  types: PropTypes.object,
}

export default DeploymentQuotas
