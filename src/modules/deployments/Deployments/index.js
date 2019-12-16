import React from 'react'
import PropTypes from 'prop-types'

import List from '../List'
import Module from '../../app/Module'
import Activation from './Active'
import GetWorkspace from '../../workspaces/GetWorkspace'
import info from '../info'

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
    const { workspace, match } = this.props
    const capabilities = workspace && workspace.workspaceCapabilities
    if (!workspace) return <Module nada />

    const vars = {
      workspaceId: workspace ? workspace.id : match.params.workspaceId,
    }

    const msg1 = info.adminPaywall
    const msg2 = info.nonadminPaywall
    const text = capabilities.canUpdateBilling ? msg1 : msg2

    if (workspace.paywallEnabled && workspace.billingEnabled)
      return (
        <Module metaTitle="Deployments" menu={this.menu}>
          <Activation
            title="Thanks for giving us a test drive!"
            text={text}
            canUpdateBilling={capabilities.canUpdateBilling}
            workspaceId={workspace.id}
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
            newWorkspaceTo={`/workspaces/${vars.workspaceId}/deployments/new`}
            vars={vars}
          />
        </Module>
      )
  }
}

Deployments.propTypes = {
  getData: PropTypes.object,
  workspace: PropTypes.object,
  match: PropTypes.object,
}

export default GetWorkspace(Deployments)
