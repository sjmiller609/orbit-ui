import React from 'react'
import PropTypes from 'prop-types'
import { findIndex } from 'lodash'
import { Card, Row, Box } from 'instruments'

import s from '../styles.scss'

import MetricContainer from '../MetricContainer'
import RemoveGroup from '../RemoveGroup'

// Define group type enum
const type = 'DEPLOYMENT_DATABASE'

class DeploymentDatabase extends React.Component {
  render() {
    const { loading, metrics, types } = this.props
    const keys = types.get()

    if (metrics.length > 0 && keys.includes(type)) {
      return (
        <Card header="Database Connections">
          <RemoveGroup types={types} type={type} />
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
      )
    }

    return null
  }
}

DeploymentDatabase.propTypes = {
  metrics: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  loading: PropTypes.bool,
  keys: PropTypes.array,
  types: PropTypes.object,
}

export default DeploymentDatabase
