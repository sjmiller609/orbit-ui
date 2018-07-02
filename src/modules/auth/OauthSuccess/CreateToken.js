'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import Create from '../Data/Create'

class CreateToken extends React.Component {
  componentWillMount() {
    const { vars, onSubmit } = this.props
    onSubmit(vars)
  }

  render() {
    return null
  }
}

CreateToken.propTypes = {
  onSubmit: PropTypes.func,
  vars: PropTypes.object,
}

export default Create(CreateToken)
