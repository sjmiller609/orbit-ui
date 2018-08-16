'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import { Redirect as RouterRedirect } from 'react-router-dom'

class Redirect extends React.Component {
  to = this.props.to

  componentWillMount() {
    const { to } = this.props
    if (typeof to === 'string') {
      // check if relative URL
      if (to.charAt(0) !== '/') {
        // append http if not there
        if (to.indexOf('http') !== 0) this.to = 'http://' + to
        window.location = this.to
        this.to = null
      }
    }
  }

  render() {
    if (!this.to) return null
    return <RouterRedirect to={this.to} />
  }
}

Redirect.propTypes = {
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}

export default Redirect
