'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import { Redirect as RouterRedirect } from 'react-router-dom'

class Redirect extends React.Component {
  componentWillMount() {
    const { to } = this.props
    if (typeof to === 'string') {
      // check if relative URL
      if (to.charAt(0) !== '/') {
        if (to.slice(0, 3) !== 'http') window.location = 'http://' + to
        else window.location = to
      }
    }
  }

  render() {
    return <RouterRedirect to={this.props.to} />
  }
}

Redirect.propTypes = {
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}

export default Redirect
