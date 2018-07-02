'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import Buttons from './Buttons'

class AuthServices extends React.Component {
  onSuccess = '&onSuccess='
  componentWillMount() {
    let to = '/'

    const ref = document.refferer
    const host = window.location.host.split('.').splice(1)
    if (ref && ~ref.indexOf(host)) to = ref

    const { location } = this.props
    const from = location.state && location.state.from
    if (from && (from !== '/signup' || from !== '/login')) to = from

    this.onSuccess = encodeURI(this.onSuccess + to)
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
