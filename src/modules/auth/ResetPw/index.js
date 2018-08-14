'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import Form from './Form'
import { getParams } from 'helpers/url'
import { Redirect } from 'instruments'
class ResetPw extends React.Component {
  token = null
  componentWillMount() {
    const { location } = this.props
    const params = getParams(location.search)
    this.token = params.token
  }

  render() {
    if (!this.token) return <Redirect to="/forgot-password" />
    const data = {
      token: this.token,
    }
    return <Form data={data} />
  }
}

ResetPw.propTypes = {
  location: PropTypes.object,
}

export default ResetPw
