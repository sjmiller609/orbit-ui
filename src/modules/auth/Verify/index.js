'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import { getParams } from 'helpers/url'
import { Redirect } from 'instruments'
import Verify from './Verify'

class Container extends React.Component {
  token = null

  componentWillMount() {
    const { location } = this.props
    const params = getParams(location.search)
    if (params.token) this.token = params.token
  }

  render() {
    if (!this.token) return <Redirect to="/login" replace />
    return <Verify token={this.token} />
  }
}

Container.propTypes = {
  location: PropTypes.object,
}

export default Container
