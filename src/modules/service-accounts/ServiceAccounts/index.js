import React from 'react'
import PropTypes from 'prop-types'

import List from '../List'
import Module from 'modules/app/Module'

class ServiceAccounts extends React.Component {
  menu = {
    nav: 'workspace',
  }
  // state for entire module
  state = { search: '' }
  // search obj constants
  search = {
    delay: false,
    placeholder: 'Search Service Accounts',
    call: search => this.setState({ search }),
  }

  render() {
    const { search } = this.state
    const { deployment } = this.props

    return (
      <List
        search={{
          text: search,
          ...this.search,
        }}
        deploymentId={deployment && deployment.id}
      />
    )
  }
}
ServiceAccounts.propTypes = {
  deployment: PropTypes.object,
}

export default ServiceAccounts
