'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { getParams } from 'helpers/url'

import Buttons from './Buttons'

class AuthServices extends React.Component {
  onSuccess = '&onSuccess='
  componentWillMount() {
    let to = '/'

    const { location } = this.props
    const from = location.state && location.state.from
    const params = getParams(location.search)
    if (from) to = from
    else if (params.rd) to = params.rd
    else {
      const ref = document.referrer
      const host = window.location.host
        .split('.')
        .splice(1)
        .join('.')

      // if same root domain
      if (ref && host && ~ref.indexOf(host)) to = ref
      else to = location.pathname
    }

    // gets encoded on server
    this.onSuccess += to
  }

  render() {
    /* eslint-disable no-unused-vars */
    const { match, location, history, ...props } = this.props
    const vars = {
      state: this.onSuccess,
    }

    return <Buttons vars={vars} {...props} />
  }
}

AuthServices.propTypes = {
  match: PropTypes.object,
  location: PropTypes.object,
  history: PropTypes.object,
}

export default withRouter(AuthServices)
