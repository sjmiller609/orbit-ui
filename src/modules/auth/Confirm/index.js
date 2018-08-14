'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import Confirm from './Confirm'
import Resend from '../Data/Resend'

class Container extends React.Component {
  email = null
  resend = this.resend.bind(this)

  componentWillMount() {
    const { location } = this.props
    if (location.state) this.email = location.state.email
  }
  resend() {
    const vars = {
      email: this.email,
    }
    this.props.onSubmit(vars)
  }

  render() {
    return <Confirm resend={this.email ? this.resend : null} />
  }
}

Container.propTypes = {
  location: PropTypes.object,
  onSubmit: PropTypes.func,
}

export default Resend(Container)
