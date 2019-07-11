'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import Token from './Token'
import { SetData, SetUI, Track, Redirect, Identify } from 'instruments'
import { getParams } from 'helpers/url'

class OauthSuccess extends React.Component {
  cli = null
  to = '/'
  track = 'User OAUTH from '
  success = null

  componentWillMount() {
    const { location, match, setData, setUI } = this.props
    const params = getParams(location.search)

    if (
      (params.extras.source && ~params.extras.source.indexOf('cli')) ||
      (match.params.service && ~match.params.service.indexOf('cli'))
    )
      this.cli = params.token

    if (params.extras.onSuccess) this.to = params.extras.onSuccess

    if (this.cli) this.track += 'CLI'
    else if (this.to.charAt(0) !== '/') this.track += 'Service - ' + this.to
    else if (this.to === '/' || ~this.to.indexOf('/signup')) {
      this.track += 'Signup'
      this.success = 'Success! Welcome to Astronomer'
    } else if (~this.to.indexOf('/login')) this.track += 'Login'
    else this.track += 'Page - ' + this.to

    if (params.strategy)
      this.track = params.strategy.toUpperCase() + ': ' + this.track

    // set token
    setData.auth({
      token: params.token,
    })
    // snackbar
    if (this.success) setUI.snackbar(this.success)

    // identify event
    Identify(params.extras.userId, { email: params.extras.email })

    // track event
    if (this.track) Track(this.track)
  }

  render() {
    if (this.cli) return <Token token={this.cli} />
    return <Redirect to={this.to} />
  }
}

OauthSuccess.propTypes = {
  match: PropTypes.object,
  location: PropTypes.object,
  setData: PropTypes.object,
  setUI: PropTypes.object,
}

export default SetData(SetUI(OauthSuccess, { snackbar: true }), { auth: true })
