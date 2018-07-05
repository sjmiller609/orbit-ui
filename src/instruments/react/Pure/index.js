import React from 'react'
import { jsonEqual } from 'helpers/compare'

const Pure = Component => {
  class Pure extends React.Component {
    /* eslint-disable no-unused-vars */
    /* eslint-disable react/prop-types */
    shouldComponentUpdate(nextProps) {
      if (jsonEqual(this.props, nextProps)) return false
      return true
    }
    render() {
      return <Component {...this.props} />
    }
  }
  return Pure
}

export default Pure
