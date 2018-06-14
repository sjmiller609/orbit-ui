import React from 'react'
import PropTypes from 'prop-types'

import Configure from './Configure'
import Delete from './Delete'

const DeploymentConfigure = ({ deployment }) => {
  return (
    <React.Fragment>
      <Configure deployment={deployment} data={deployment} />
      <Delete deployment={deployment} />
    </React.Fragment>
  )
}

DeploymentConfigure.propTypes = {
  deployment: PropTypes.object,
}

export default DeploymentConfigure
