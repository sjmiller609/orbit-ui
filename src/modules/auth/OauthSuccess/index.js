'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import CliCode from './CliCode'
import CreateToken from './CreateToken'

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

    const params = decodeURIComponent(location.search).split('&')
    for (let i in params) {
      const ar = params[i].split('=')
      if (ar[0] === 'cli') this.cli = ar[1]
      if (ar[0] === 'code') this.vars.credentials = ar[1]
      if (ar[0] === 'onSuccess') this.to = ar[1]
    }

    if (this.cli) this.track += 'CLI'
    else if (this.to.charAt(0) !== '/') this.track += 'EE Service - ' + this.to
    else if (~this.to.indexOf('/signup')) {
      this.track += 'Signup'
      this.success = 'Success! Welcome to Astronomer'
    } else if (~this.to.indexOf('/login')) this.track += 'Login'
    else this.track += 'Page - ' + this.to

    if (this.vars.service === 'google')
      this.track = 'Google Oauth: ' + this.track
  }

  render() {
    if (this.cli) return <CliCode code={this.credentials} />
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
