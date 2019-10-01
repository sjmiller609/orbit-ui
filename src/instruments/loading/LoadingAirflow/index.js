'use strict'
import React from 'react'
import { Icon } from 'instruments'

import s from './styles.scss'

class LoadingAirflow extends React.Component {
  render() {
    return (
      <div className={s.container}>
        <span className={s.logo}>{<Icon icon="airflow_astro" />}</span>
      </div>
    )
  }
}

export default LoadingAirflow
