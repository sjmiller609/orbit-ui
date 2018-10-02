'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { getParams } from 'helpers/url'

import Auth from './Auth'

class AuthServices extends React.Component {
  vars = {
    extras: {
      onSuccess: '',
    },
  }

  componentWillMount() {
    const { location } = this.props
    let to = location.pathname

    const from = location.state && location.state.from
    const params = getParams(location.search)
    const ref = document.referrer

    if (from) to = from
    else if (params.rd) to = params.rd
    else if (ref.indexOf(window.location.origin) !== 0) {
      const host = window.location.host

      const h = host.split('.')
      if (h.length > 1) h.splice(1)
      const h2 = h.join('.')
      // if same root domain
      if (ref && h2 && ~ref.indexOf(h2)) to = ref
    }

    // gets encoded on server
    this.vars.extras.onSuccess = to

    if (params.source) this.vars.extras.source = params.source
  }

  render() {
    /* eslint-disable no-unused-vars */
    const { match, location, history, ...props } = this.props

    return (
      <Auth
        vars={this.vars}
        cli={this.vars.extras.source === 'cli'}
        pathname={location.pathname}
        {...props}
      />
    )
  }
}

AuthServices.propTypes = {
  match: PropTypes.object,
  location: PropTypes.object,
  history: PropTypes.object,
}

export default withRouter(AuthServices)
