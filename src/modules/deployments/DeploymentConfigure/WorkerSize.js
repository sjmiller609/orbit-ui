import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import s from './styles.scss'
import { Box, Icon, Mini } from 'instruments'

export const workerSizes = [
  {
    icon: 'alien_ship',
    value: 'small',
    className: s.sizeS,
  },
  {
    icon: 'alien_ship',
    value: 'medium',
    className: s.sizeM,
  },
  {
    icon: 'alien_ship',
    value: 'large',
    className: s.sizeL,
  },
]

const WorkerSize = ({ icon, value, className, selected }) => {
  return (
    <Box
      justify="flex-end"
      full
      className={classnames(s.worker, selected && s.selected, className)}>
      <Box>
        <Icon icon={icon} />
      </Box>
      <Mini>{value}</Mini>
    </Box>
  )
}

WorkerSize.propTypes = {
  icon: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  selected: PropTypes.bool,
}

export default WorkerSize
