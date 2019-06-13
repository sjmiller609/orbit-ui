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
    const msg1 =
      'Please add a payment method to your workspace to continue using Astronomer.'
    const msg2 =
      'Please ask your Workspace Admin to add a payment method to this workspace in order to continue using Astronomer.'
    const text = workspace.workspaceCapabilities.canUpdateBilling ? msg1 : msg2
    //Check to see if billing is enabled and the current user has permissions to add payment information
    console.log(workspace)
    if (workspace.isSuspended == true)
      return (
        <Module metaTitle="Deployments" menu={this.menu}>
          <Activation
            title="Thanks for giving us a test drive!"
            text={text}
            canUpdateIAM={workspace.workspaceCapabilities.canUpdateBilling}
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
