'use strict'
import React from 'react'
import PropTypes from 'prop-types'

class Icon extends React.Component {
  mounted = true
  state = {
    src: null,
  }

  componentWillMount() {
    import(/* webpackPrefetch: 0 */ `./img/${this.props.icon}.svg`).then(
      src => {
        if (this.mounted) this.setState({ src: src.default })
      }
    )
  }
  componentWillUnmount() {
    this.mounted = false
  }

  render() {
    const { src } = this.state
    if (!src) return null
    return <img src={src} className={this.props.className} />
  }
}

Icon.propTypes = {
  icon: PropTypes.string,
  className: PropTypes.string,
}

export default Icon
