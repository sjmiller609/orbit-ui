import React from 'react'
import PropTypes from 'prop-types'

/* istanbul ignore next */
class ScrollToTop extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return null
  }
}

ScrollToTop.propTypes = {
  location: PropTypes.object,
}

export default ScrollToTop
