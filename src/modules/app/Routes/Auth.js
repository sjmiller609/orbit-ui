import React from 'react'
import PropTypes from 'prop-types'

import SelfData from 'modules/self/Data'
import { SetData, Redirect } from 'instruments'

class Auth extends React.Component {
  // unset workspaceId on these routes
  componentWillMount() {
    this.props.setData.workspaceId(null)
  }
  render() {
    /* eslint-disable no-unused-vars */
    const { component: Component, setData, permissions, ...props } = this.props

    if (permissions.isAdmin && props.self.isAdmin) return <Redirect to="/" />
    return <Component {...props} />
  }
}

Auth.propTypes = {
  component: PropTypes.func,
  setData: PropTypes.object,
  permissions: PropTypes.object,
}

export default SelfData(SetData(Auth, { workspaceId: true }))
