'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import s from './styles.scss'

// const Icon = ({ icon, className }) => {
//   // const src = require(`./${icon}.svg`)
//   // return <img src={src} className={classnames(s.icon, className)} />
//   import(`./${icon}.svg`).then(src => (
//     <img src={src} className={classnames(s.icon, className)} />
//   ))
//   return null
// }

class Icon extends React.Component {
  state = {
    src: null,
  }

  componentWillMount() {
    import(`./${this.props.icon}.svg`).then(src =>
      this.setState({ src: src.default })
    )
  }

  render() {
    const { src } = this.state
    if (!src) return null
    return (
      <img src={src} className={classnames(s.icon, this.props.className)} />
    )
  }
}

Icon.propTypes = {
  icon: PropTypes.string,
  className: PropTypes.string,
}

export default Icon
