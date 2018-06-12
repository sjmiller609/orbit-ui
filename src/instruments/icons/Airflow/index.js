'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import s from './styles.scss'

import { Box, Icon } from '../../../instruments'

const Airflow = ({ className }) => {
  return (
    <Box className={classnames(s.airflow, className)}>
      <Icon icon="airflow_ring" className={classnames(s.border, 'ring')} />
      <Icon icon="dag" className={s.dag} />
    </Box>
  )
}

Airflow.propTypes = {
  className: PropTypes.string,
}

export default Airflow
