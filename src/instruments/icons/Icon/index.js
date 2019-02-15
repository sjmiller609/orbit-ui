'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import { LoadImg } from 'instruments'

// need to create a map of icon: LoadImg
// dynamic path at runtime doesn't work well
const map = {
  airflow_astro: LoadImg(() => import(`./img/airflow_astro.svg`)),
  airflow_ring: LoadImg(() => import(`./img/airflow_ring.svg`)),
  airflow: LoadImg(() => import(`./img/airflow.svg`)),
  alien_ship: LoadImg(() => import(`./img/alien_ship.svg`)),
  arrow_darkBg: LoadImg(() => import(`./img/arrow_darkBg.svg`)),
  arrow: LoadImg(() => import(`./img/arrow.svg`)),
  astro_helmet: LoadImg(() => import(`./img/astro_helmet.svg`)),
  celery: LoadImg(() => import(`./img/celery.svg`)),
  kubernetes: LoadImg(() => import(`./img/kubernetes.svg`)),
  dag: LoadImg(() => import(`./img/dag.svg`)),
  flower_astro: LoadImg(() => import(`./img/flower_astro.svg`)),
  scheduler: LoadImg(() => import(`./img/scheduler.svg`)),
  stars: LoadImg(() => import(`./img/stars.svg`)),
  webserver: LoadImg(() => import(`./img/webserver.svg`)),
  satellite: LoadImg(() => import(`./img/satellite.svg`)),
  worker: LoadImg(() => import(`./img/worker.svg`)),
}

class Icon extends React.Component {
  state = {
    Img: map[this.props.icon],
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
