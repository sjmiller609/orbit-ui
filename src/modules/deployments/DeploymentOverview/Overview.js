import React from 'react'
import PropTypes from 'prop-types'

import { CardForm, P, B, Link } from 'instruments'

const Overview = ({ deployment }) => {
  let airflow
  let flower
  if (deployment.urls)
    deployment.urls.forEach(u => {
      if (u.type === 'airflow') airflow = u.url
      if (u.type === 'flower') flower = u.url
    })
  return (
    <React.Fragment>
      <CardForm
        title="Apache Airflow Dashboard"
        button={{
          text: 'Open Dashboard',
          save: !!airflow,
          to: airflow,
        }}>
        <P>
          Your Apache Airflow dashboard for <B>{deployment.label}</B> now lives
          at&nbsp;
          <Link to={airflow} newTab>
            {airflow || '[Not available on dev]'}
          </Link>. Configure and deploy your tasks with this dashboard.
        </P>
      </CardForm>
      <CardForm
        title="Flower - Celery Dashboard"
        button={{
          text: 'Open Dashboard',
          save: !!flower,
          to: flower,
        }}>
        <P>
          Your Flower dashboard now lives at&nbsp;
          <Link to={flower} newTab>
            {flower || '[Not available on dev]'}
          </Link>. Monitor worker queues on Celery with Flower.
        </P>
      </CardForm>
    </React.Fragment>
  )
}

Overview.propTypes = {
  deployment: PropTypes.object,
}

export default Overview
