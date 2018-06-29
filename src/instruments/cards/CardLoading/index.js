'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Card, Box, LoadingDots, Loading } from 'instruments'
import s from './styles.scss'

// NOTE: Incomplete - not used

const CardLoading = ({ className }) => {
  return (
    <Card className={classnames(s.card, className)}>
      <Box>
        <Loading />
        <LoadingDots />
      </Box>
    </Card>
  )
}

CardLoading.propTypes = {
  className: PropTypes.string,
}

export default CardLoading
