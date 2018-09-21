'use strict'
import React from 'react'
import PropTypes from 'prop-types'

import s from './styles.scss'
import { Block1, Icon } from 'instruments'

const Empty = ({ button }) => {
  return (
    <Block1
      left={<Icon icon="satellite" className={s.large} />}
      title="Create a service account"
      text="Get an API key to automate access to your deployments.">
      {button}
    </Block1>
  )
}

Empty.propTypes = {
  button: PropTypes.element,
}

export default Empty
