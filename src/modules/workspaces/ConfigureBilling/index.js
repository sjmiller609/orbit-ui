import React from 'react'
import PropTypes from 'prop-types'

import BillingForm from './BillingForm'
import UpdateBilling from './UpdateBilling'

const ConfigureBilling = ({ workspace, self }) => {
  //Render component based on whether or not a stripeCustomerId exists in the database
  if (workspace.stripeCustomerId == null)
    return (
      <React.Fragment>
        <BillingForm workspace={workspace} data={workspace} self={self} />
      </React.Fragment>
    )
  else
    return (
      <React.Fragment>
        <UpdateBilling workspace={workspace} data={workspace} self={self} />
      </React.Fragment>
    )
}

ConfigureBilling.propTypes = {
  workspace: PropTypes.object,
  self: PropTypes.object,
}

export default ConfigureBilling
