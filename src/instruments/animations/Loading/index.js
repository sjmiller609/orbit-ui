'use strict'
import React from 'react'
import s from './styles.scss'
import { Helmet } from 'react-helmet'

const Loading = () => {
  return (
    <div className={s.loading}>
      <Helmet>
        <title>Loading...</title>
      </Helmet>
      <div />
    </div>
  )
}

export default Loading
