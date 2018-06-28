'use strict'
import React from 'react'
import PropTypes from 'prop-types'

import s from './styles.scss'
import { Block1, Icon } from 'instruments'

const Empty = ({ button }) => {
  return (
    <Block1
      left={<Icon icon="stars" className={s.largeStars} />}
      title="Create your Workspace"
      text="Invite your team, launch deployments, and manage all your Airflow instances in one place.">
      {button}
    </Block1>
  )
}

Empty.propTypes = {
  button: PropTypes.element,
}

export default Empty
