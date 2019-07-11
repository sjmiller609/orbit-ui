import React from 'react'
import PropTypes from 'prop-types'
import { ErrorPage } from 'instruments'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidCatch() {
    // Display fallback UI
    this.setState({ hasError: true })
  }

  render() {
    // TODO: disabling this for now because it's erroring with lazy loading components
    // https://github.com/astronomerio/orbit-ui/issues/44
    // re-enabling for now to see if switching loaders fixes
    if (this.state.hasError) return <ErrorPage />

    return this.props.children
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.element,
}

export default ErrorBoundary
