'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Link } from 'instruments'

import s from './styles.scss'

class Logo extends React.Component {
  state = {
    src: null,
  }

  componentWillMount() {
    const { darkBg, noStars, full } = this.props
    let path = full ? 'Astro_' : 'A_'
    path += noStars ? '' : 'stars_'
    path += darkBg ? 'darkBg' : 'lightBg'

    import(`./img/${path}.svg`).then(module =>
      this.setState({ src: module.default })
    )
  }

  render() {
    const { src } = this.state
    if (!src) return null
    const { noStars, full, className } = this.props
    return (
      <Link to="/">
        <img
          src={src}
          className={classnames(
            s.logo,
            full && s.full,
            !noStars && s.stars,
            className
          )}
          title="Astronomer"
        />
      </Link>
    )
  }
}

Logo.propTypes = {
  darkBg: PropTypes.bool,
  full: PropTypes.bool,
  noStars: PropTypes.bool,
  className: PropTypes.string,
}

export default Logo
