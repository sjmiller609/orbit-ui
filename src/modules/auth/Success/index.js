'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import CliCode from './CliCode'

class Success extends React.Component {
  code = null
  onSuccess = '/'

  componentWillMount() {
    const { location } = this.props
    const params = decodeURIComponent(location.search).split('&')
    for (let i in params) {
      const ar = params[i].split('=')

      if (ar[0] === 'code') this.code = ar[1]
      if (ar[0] === 'onSuccess') this.onSuccess = ar[1]
    }
  }

  render() {
    /* eslint-disable no-unused-vars */
    const { match, location, history } = this.props
    console.log(history)
    console.log(match)
    return <CliCode code={this.code} />
  }
}

Success.propTypes = {
  match: PropTypes.object,
  location: PropTypes.object,
  history: PropTypes.object,
}

export default Success
