import React from 'react'
import PropTypes from 'prop-types'

import List from '../List'
import Module from '../../app/Module'
import Activation from './Active'
import GetWorkspace from '../../workspaces/GetWorkspace'

class Deployments extends React.Component {
  menu = {
    nav: 'workspace',
  }
  // state for entire module
  state = { search: '', isActive: true }
  // search obj constants
  search = {
    delay: false,
    placeholder: 'Search Deployments',
    call: search => this.setState({ search }),
  }

  render() {
    const { search } = this.state
    const { workspace } = this.props
    if (!workspace) return <Module nada />

    const vars = {
      workspaceId: workspace.id,
    }
    //Check to see if billing is enabled and the current user has permissions to add payment information
    if (
      workspace.workspaceCapabilities.canUpdateBilling == true &&
      workspace.stripeCustomerId == null
    )
      return (
        <Module metaTitle="Deployments" menu={this.menu}>
          <Activation
            title="Welcome to Astronomer!"
            text="Please add a payment method to your workspace to start your 14 day free trial."
          />
        </Module>
      )
    else
      return (
        <Module metaTitle="Deployments" menu={this.menu}>
          <List
            search={{
              text: search,
              ...this.search,
            }}
            vars={vars}
          />
        </Module>
      )
  }
}

Deployments.propTypes = {
  getData: PropTypes.object,
  workspace: PropTypes.object,
}

export default GetWorkspace(Deployments)
