import React from 'react'
import PropTypes from 'prop-types'

import analytics from '../analytics'

class Pageview extends React.Component {
  trackPage = this.trackPage.bind(this)

  componentDidMount() {
    const page = this.props.location.pathname
    this.trackPage(page)
  }

  componentWillReceiveProps(nextProps) {
    const currentPage = this.props.location.pathname
    const nextPage = nextProps.location.pathname
    if (currentPage !== nextPage) this.trackPage(nextPage)
  }

  trackPage(page) {
    analytics.page(page)
  }

  render() {
    return null
  }
}

Pageview.propTypes = {
  location: PropTypes.object,
}

export default Pageview
