import React from 'react'
import PropTypes from 'prop-types'

import { CardForm, P, B, Link } from '../../../instruments'

const Overview = ({ deployment }) => {
  return (
    <CardForm
      title="Apache Airflow Dashboard"
      button={{
        text: 'Open Dashboard',
      }}>
      <P>
        Your Apache Airflow dashboard for <B>{deployment.title}</B> now lives at{' '}
        <Link to={''} newTab>
          ancient-night-24309.astronomer.io
        </Link>. Configure and deploy your tasks with this dashboard. You can
        login with your Astronomer account credentials.
      </P>
    </CardForm>
  )
}

Overview.propTypes = {
  deployment: PropTypes.object,
}

export default Overview
