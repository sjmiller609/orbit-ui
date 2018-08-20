'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Link, LoadImg } from 'instruments'

import s from './styles.scss'

class Logo extends React.Component {
  state = {
    Img: null,
  }

  componentWillMount() {
    const { darkBg, noStars, full } = this.props
    let path = full ? 'Astro_' : 'A_'
    path += noStars || full ? '' : 'stars_'
    path += darkBg ? 'darkBg' : 'lightBg'

    this.setState({
      Img: LoadImg(() => import(`./img/${path}.svg`)),
    })
  }

  render() {
    const { Img } = this.state
    if (!Img) return null
    const { to, noStars, full, className } = this.props
    return (
      <Link to={to || '/'}>
        <Img
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
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  darkBg: PropTypes.bool,
  full: PropTypes.bool,
  noStars: PropTypes.bool,
  className: PropTypes.string,
}

export default Logo
