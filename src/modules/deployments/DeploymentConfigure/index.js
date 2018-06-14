import React from 'react'
import PropTypes from 'prop-types'

import Configure from './Configure'
import Delete from './Delete'

const DeploymentConfigure = ({ deployment }) => {
  // load form
  const data = {
    ...deployment,
  }
  return (
    <React.Fragment>
      <Configure deployment={deployment} data={data} />
      <Delete deployment={deployment} />
    </React.Fragment>
  )
}

DeploymentConfigure.propTypes = {
  deployment: PropTypes.object,
}

export default DeploymentConfigure
