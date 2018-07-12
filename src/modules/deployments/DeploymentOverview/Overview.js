import React from 'react'
import PropTypes from 'prop-types'

import { CardRow, B } from 'instruments'
import ServiceDashboard from './ServiceDashboard'

const Overview = ({ deployment, loading }) => {
  let airflow
  let flower
  if (deployment.urls)
    deployment.urls.forEach(u => {
      if (u.type === 'airflow') airflow = u.url
      if (u.type === 'flower') flower = u.url
    })
  return (
    <CardRow>
      <ServiceDashboard
        title="Apache Airflow"
        text={
          <React.Fragment>
            Author, schedule and monitor workflows for <B>{deployment.label}</B>:
          </React.Fragment>
        }
        url={airflow}
        icon="airflow_astro"
        loading={loading}
      />
      <ServiceDashboard
        title="Celery Flower"
        text="Monitor worker queues on Celery with Flower:"
        url={flower}
        icon="flower_astro"
        loading={loading}
      />
    </CardRow>
  )
}

Overview.propTypes = {
  deployment: PropTypes.object,
  loading: PropTypes.bool,
}

export default Overview
