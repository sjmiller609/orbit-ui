'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { getParams } from 'helpers/url'

import Auth from './Auth'

class AuthServices extends React.Component {
  onSuccess = ''
  componentWillMount() {
    let to = '/'

    const { location } = this.props
    const from = location.state && location.state.from
    const params = getParams(location.search)
    if (from) to = from
    else if (params.rd) to = params.rd
    else {
      const ref = document.referrer
      const h = window.location.host.split('.')
      if (h.length > 1) h.splice(1)
      const host = h.join('.')

      // if same root domain
      if (ref && host && ~ref.indexOf(host)) to = ref
      else to = location.pathname
    }

    // gets encoded on server
    this.onSuccess = to
  }

  render() {
    /* eslint-disable no-unused-vars */
    const { match, location, history, ...props } = this.props
    const vars = {
      extras: {
        onSuccess: this.onSuccess,
      },
    }

    return <Auth vars={vars} {...props} />
  }
}

AuthServices.propTypes = {
  match: PropTypes.object,
  location: PropTypes.object,
  history: PropTypes.object,
}

export default withRouter(AuthServices)
