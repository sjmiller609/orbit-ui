import React from 'react'
import PropTypes from 'prop-types'
import { findIndex } from 'lodash'
import { Card, Row, Box } from 'instruments'

import s from '../styles.scss'

import MetricContainer from '../MetricContainer'
import RemoveGroup from '../RemoveGroup'

// Define group type enum
const type = 'DEPLOYMENT_USAGE'

class DeploymentQuotas extends React.Component {
  render() {
    const { loading, metrics, step, types } = this.props
    const keys = types.get()

    if (metrics.length > 0 && keys.includes(type)) {
      return (
        <Card header="Resource Utilization">
          <RemoveGroup types={types} type={type} />
          <Row className={s.row}>
            <Box className={s.col}>
              <MetricContainer
                loading={loading}
                title="CPU Usage"
                metric={metrics[findIndex(metrics, ['label', 'cpuUsage'])]}
                type="complexline"
                label="%"
                step={step}
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
                step={step}
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
                step={step}
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

DeploymentQuotas.propTypes = {
  metrics: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  loading: PropTypes.bool,
  step: PropTypes.number,
  types: PropTypes.object,
}

export default DeploymentQuotas
