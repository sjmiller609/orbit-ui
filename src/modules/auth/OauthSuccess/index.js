'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import CliCode from './CliCode'
import CreateToken from './CreateToken'
import { getParams } from 'helpers/url'

class OauthSuccess extends React.Component {
  vars = {
    service: null,
    credentials: null,
  }
  cli = null
  to = '/'
  track = 'New Token Created From '
  success = null

  componentWillMount() {
    const { location, match } = this.props
    this.vars.service = match.params.service

    const params = getParams(location.search)
    console.log(params)
    if (params.state && ~params.state.indexOf('cli')) this.cli = true
    this.vars.credentials = params.code
    if (params.OnSuccess) this.to = params.onSuccess

    if (this.cli) this.track += 'CLI'
    else if (this.to.charAt(0) !== '/') this.track += 'EE Service - ' + this.to
    else if (this.to === '/' || ~this.to.indexOf('/signup')) {
      this.track += 'Signup'
      this.success = 'Success! Welcome to Astronomer'
    } else if (~this.to.indexOf('/login')) this.track += 'Login'
    else this.track += 'Page - ' + this.to

    if (this.vars.service === 'google')
      this.track = 'Google Oauth: ' + this.track
  }

  render() {
    if (this.cli) return <CliCode code={this.vars.credentials} />
    return (
      <CreateToken
        vars={this.vars}
        to={this.to}
        track={this.track}
        success={this.success}
      />
    )
  }
}

OauthSuccess.propTypes = {
  match: PropTypes.object,
  location: PropTypes.object,
  onSubmit: PropTypes.func,
}

export default OauthSuccess
