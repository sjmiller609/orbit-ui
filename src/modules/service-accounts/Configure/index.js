import React from 'react'
import PropTypes from 'prop-types'

import Data from '../Data'
import Form from './Configure'
import Delete from './Delete'
import Key from './Key'
import { CardMenu } from 'instruments'
import { jsonEqual } from 'helpers/compare'
import Update from '../Data/Update'

const Configure = Update(Form)

class ConfigureServiceAccount extends React.Component {
  set = this.set.bind(this)
  button = {
    //  start: 'true',
    text: 'Back',
    backArrow: 'arrow',
    style: 'blue',
  }
  menu = [
    {
      text: 'API Key',
      id: 'apiKey',
    },
    {
      text: 'Configure',
      id: 'configure',
    },
    {
      text: 'Delete',
      id: 'delete',
      newForm: true,
    },
  ]
  state = {
    serviceAccount: {},
  }
  componentWillMount() {
    this.set(this.props.serviceAccounts)
  }

  componentWillReceiveProps({ serviceAccounts }) {
    if (!jsonEqual(serviceAccounts, this.props.serviceAccounts))
      this.set(serviceAccounts)
  }

  set(serviceAccounts) {
    const set = {
      serviceAccount: (serviceAccounts && serviceAccounts[0]) || {},
    }

    this.setState(set)
  }

  render() {
    const { path, deploymentId, apiKey } = this.props
    const { serviceAccount } = this.state
    this.button.to = path

    return (
      <CardMenu menu={this.menu} menuList={{ button: this.button }}>
        <Key apiKey={apiKey || serviceAccount.apiKey} />
        <Configure
          serviceAccount={serviceAccount}
          data={serviceAccount}
          deploymentId={deploymentId}
          role={serviceAccount.roleBinding.role}
          saveText="Update"
        />
        <Delete
          serviceAccount={serviceAccount}
          deploymentId={deploymentId}
          path={path}
        />
      </CardMenu>
    )
  }
}

ConfigureServiceAccount.propTypes = {
  serviceAccounts: PropTypes.array,
  deploymentId: PropTypes.string,
  path: PropTypes.string,
  apiKey: PropTypes.string,
}

export default Data(ConfigureServiceAccount)
