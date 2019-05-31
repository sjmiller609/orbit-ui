import React from 'react'
import PropTypes from 'prop-types'
import GetWorkspace from '../GetWorkspace'
import Module from '../../app/Module'
import ConfigureBilling from '../ConfigureBilling'

import { Elements, StripeProvider } from 'react-stripe-elements'

class Billing extends React.Component {
  menu = {
    nav: 'workspace',
  }

  render() {
    const { workspace } = this.props
    // Error handled
    if (!workspace) return <Module nada />
    return (
      <Module metaTitle={'Billing | ' + workspace.label} menu={this.menu}>
        <StripeProvider apiKey={window.STRIPE_PK}>
          <Elements>
            <ConfigureBilling workspace={workspace} />
          </Elements>
        </StripeProvider>
      </Module>
    )
  }
}

Billing.propTypes = {
  workspace: PropTypes.object,
}

export default GetWorkspace(Billing)
