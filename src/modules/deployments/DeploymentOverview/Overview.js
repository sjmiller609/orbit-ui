import React from 'react'
import PropTypes from 'prop-types'

import { CardRow } from 'instruments'
import ServiceDashboard from './ServiceDashboard'

const Overview = ({ deployment, loading }) => {
  let airflow
  let flower
  if (deployment.urls)
    deployment.urls.forEach(u => {
      if (u.type === 'airflow') airflow = `${u.url}/deployments/airflow`
      if (u.type === 'flower') flower = `${u.url}/deployments/flower`
    })
  return (
    <div>
      <CardRow>
        <ServiceDashboard
          title="Apache Airflow"
          text="Author, schedule and monitor workflows."
          url={airflow}
          icon="airflow_astro"
          loading={loading}
          deployment={deployment}
        />
        {flower && (
          <ServiceDashboard
            title="Celery Flower"
            text="Monitor worker queues on Celery with Flower."
            url={flower}
            icon="celery"
            loading={loading}
            deployment={deployment}
          />
        )}
      </CardRow>
    </div>
  )
}

Overview.propTypes = {
  deployment: PropTypes.object,
  loading: PropTypes.bool,
}

export default Overview
