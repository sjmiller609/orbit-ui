import React from 'react'
import PropTypes from 'prop-types'

import Submit from '../Data/Verify'

class Verify extends React.Component {
  token = null

  componentWillMount() {
    const { token, onSubmit } = this.props
    const vars = {
      token,
    }
    onSubmit(vars)
  }

  render() {
    return null
  }
}

Verify.propTypes = {
  token: PropTypes.string,
  onSubmit: PropTypes.func,
}

export default Submit(Verify)
