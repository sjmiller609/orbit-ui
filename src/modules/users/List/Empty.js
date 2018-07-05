'use strict'
import React from 'react'
import PropTypes from 'prop-types'

import s from './styles.scss'
import { Block1, Avatar } from 'instruments'

const Empty = ({ button }) => {
  return (
    <Block1
      left={<Avatar className={s.profileLarge} />}
      title="There's no one here."
      text="Add a user to this workspace.">
      {button}
    </Block1>
  )
}

Empty.propTypes = {
  button: PropTypes.element,
}

export default Empty
