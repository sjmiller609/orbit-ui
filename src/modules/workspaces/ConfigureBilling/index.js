import React from 'react'
import PropTypes from 'prop-types'

import BillingForm from './BillingForm'
import UpdateBilling from './UpdateBilling'

const ConfigureBilling = ({ workspace }) => {
  //Render component based on whether or not a stripeCustomerId exists in the database
  if (workspace.stripeCustomerId == null)
    return (
      <React.Fragment>
        <BillingForm workspace={workspace} data={workspace} />
      </React.Fragment>
    )
  else
    return (
      <React.Fragment>
        <UpdateBilling workspace={workspace} data={workspace} />
      </React.Fragment>
    )
}

ConfigureBilling.propTypes = {
  workspace: PropTypes.object,
}

export default ConfigureBilling
