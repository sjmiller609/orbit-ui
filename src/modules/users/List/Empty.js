'use strict'
import React from 'react'
import PropTypes from 'prop-types'

import s from './styles.scss'
import { Block1, Avatar } from 'instruments'

const Empty = ({ superuser, button }) => {
  return (
    <Block1
      left={<Avatar className={s.profileLarge} />}
      title="There's no one here."
      text={
        superuser
          ? 'Add a user to the platform.'
          : 'Add a user to this workspace.'
      }>
      {button}
    </Block1>
  )
}

Empty.propTypes = {
  superuser: PropTypes.bool,
  button: PropTypes.element,
}

export default Empty
