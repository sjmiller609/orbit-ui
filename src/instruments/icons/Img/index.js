'use strict'
import React from 'react'
import PropTypes from 'prop-types'

// Base img component to lazy load imgs
class Img extends React.Component {
  state = {
    src: null,
  }

  componentWillMount() {
    import(this.props.src).then(module =>
      this.setState({ src: module.default })
    )
  }

  render() {
    const { src } = this.state
    if (!src) return null
    return <img src={src} {...this.props} />
  }
}

Img.propTypes = {
  src: PropTypes.string,
}

export default Img
