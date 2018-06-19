import React from 'react'
import PropTypes from 'prop-types'
import { CardError } from '../../../instruments'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true })

    console.log(error)
    console.log(info)
  }

  render() {
    if (this.state.hasError) return <CardError />

    return this.props.children
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.element,
}

export default ErrorBoundary
