'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Link, LoadImg } from 'instruments'

import s from './styles.scss'

const map = {
  A_darkBg: LoadImg(() => import(`./img/A_darkBg.svg`)),
  A_lightBg: LoadImg(() => import(`./img/A_lightBg.svg`)),
  A_stars_darkBg: LoadImg(() => import(`./img/A_stars_darkBg.svg`)),
  A_stars_lightBg: LoadImg(() => import(`./img/A_stars_lightBg.svg`)),
  Astro_darkBg: LoadImg(() => import(`./img/Astro_darkBg.svg`)),
  Astro_lightBg: LoadImg(() => import(`./img/Astro_lightBg.svg`)),
}

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
      Img: map[path],
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
