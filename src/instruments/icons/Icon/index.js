'use strict'
import React from 'react'
import PropTypes from 'prop-types'

class Icon extends React.Component {
  mounted = true
  state = {
    src: null,
  }

  componentWillMount() {
    // TODO: webpack issues, have to do this (though it loads the entire directory)
    const src = require(`./img/${this.props.icon}.svg`)
    if (this.mounted) this.setState({ src })
    // import(/* webpackPrefetch: 0 */ `./img/${this.props.icon}.svg`).then(
    //   src => {
    //     if (this.mounted) this.setState({ src: src.default })
    //   }
    // )
  }
  componentWillUnmount() {
    this.mounted = false
  }

  render() {
    const { src } = this.state
    if (!src) return null
    return (
      <img
        src={src}
        className={this.props.className}
        title={this.props.title}
      />
    )
  }
}

Icon.propTypes = {
  icon: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
}

export default Icon
