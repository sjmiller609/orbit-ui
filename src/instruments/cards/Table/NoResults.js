'use strict'
import React from 'react'

import { Box, H5, Icon } from '../../../instruments'
import s from './styles.scss'

const NoResults = () => {
  return (
    <Box className={s.noResults}>
      <Icon icon="alien_ship" />
      <H5>Nothing found.</H5>
    </Box>
  )
}

export default NoResults
