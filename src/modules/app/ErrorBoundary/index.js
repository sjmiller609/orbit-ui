import React from 'react'
// import { Snackbar } from '../../../instruments'
import PropTypes from 'prop-types'

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
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>
    }
    return this.props.children
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.element,
}

export default ErrorBoundary
