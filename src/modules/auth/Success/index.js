'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import CliCode from './CliCode'

class Success extends React.Component {
  componentWillMount() {}

  render() {
    /* eslint-disable no-unused-vars */
    const { match, location, history } = this.props
    console.log(history)
    console.log(match)
    const code = 'abc'
    return <CliCode code={code} />
  }
}

Success.propTypes = {
  match: PropTypes.object,
  location: PropTypes.object,
  history: PropTypes.object,
}

export default Success
