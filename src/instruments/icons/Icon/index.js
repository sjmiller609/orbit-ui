'use strict'
import React from 'react'
import PropTypes from 'prop-types'

class Icon extends React.Component {
  state = {
    src: null,
  }

  componentWillMount() {
    import(`./img/${this.props.icon}.svg`).then(src =>
      this.setState({ src: src.default })
    )
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
