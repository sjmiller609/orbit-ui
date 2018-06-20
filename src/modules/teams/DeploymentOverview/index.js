import React from 'react'
import PropTypes from 'prop-types'

import Overview from './Overview'

const DeploymentOverview = ({ deployment }) => {
  return (
    <React.Fragment>
      <Overview deployment={deployment} />
    </React.Fragment>
  )
}

DeploymentOverview.propTypes = {
  deployment: PropTypes.object,
}

export default DeploymentOverview
