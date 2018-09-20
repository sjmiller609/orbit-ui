import React from 'react'
import PropTypes from 'prop-types'

import Data from '../Data'
import Configure from './Configure'
import Delete from './Delete'

const ConfigureServiceAccount = ({ serviceAccounts, deploymentId }) => {
  const serviceAccount = serviceAccounts[0] || {}
  return (
    <React.Fragment>
      <Configure serviceAccount={serviceAccount} data={serviceAccount} />
      <Delete serviceAccount={serviceAccount} deploymentId={deploymentId} />
    </React.Fragment>
  )
}

ConfigureServiceAccount.propTypes = {
  serviceAccounts: PropTypes.array,
  deploymentId: PropTypes.string,
}

export default Data(ConfigureServiceAccount)
