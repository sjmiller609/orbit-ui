'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import Buttons from './Buttons'

class AuthServices extends React.Component {
  onSuccess = '&onSuccess='
  componentWillMount() {
    let to = '/'

    const ref = document.referrer
    const host = window.location.host
      .split('.')
      .splice(1)
      .join('.')

    // if same root domain
    if (ref && host && ~ref.indexOf(host)) to = ref

    const { location } = this.props
    const from = location.state && location.state.from
    if (from) to = from
    else to = location.pathname

    this.onSuccess += encodeURIComponent(to)
    console.log(this.onSuccess)
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
