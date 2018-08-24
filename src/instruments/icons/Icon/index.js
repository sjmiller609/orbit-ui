'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import { LoadImg } from 'instruments'

class Icon extends React.Component {
  state = {
    Img: LoadImg(() =>
      import(/* webpackPrefetch: true */ `./img/${this.props.icon}.svg`)
    ),
  }

  render() {
    const { Img } = this.state
    if (!Img) return null
    return <Img className={this.props.className} title={this.props.title} />
  }
}

Icon.propTypes = {
  icon: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
}

export default Icon
