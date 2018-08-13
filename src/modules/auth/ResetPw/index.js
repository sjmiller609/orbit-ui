'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import Form from './Form'
import { getParams } from 'helpers/url'

class ResetPw extends React.Component {
  componentWillMount() {
    const { location } = this.props
    const params = getParams(location.search)
  }

  render() {
    const props = {}
    return <Form {...props} />
  }
}

ResetPw.propTypes = {
  location: PropTypes.object,
}

export default ResetPw
