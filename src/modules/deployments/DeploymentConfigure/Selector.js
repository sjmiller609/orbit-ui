import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import s from './styles.scss'
import { Box, Icon, Mini } from 'instruments'

const Selector = ({ icon, value, text, disabled, className, selected }) => {
  return (
    <Box
      justify="flex-end"
      full
      className={classnames(
        s.selector,
        selected && s.selected,
        disabled && s.disabled,
        className
      )}>
      <Box>
        <Icon
          icon={icon}
          className={icon === 'airflow_astro' && s.airflowIcon}
        />
      </Box>
      <Mini>{text || value}</Mini>
    </Box>
  )
}

Selector.propTypes = {
  icon: PropTypes.string,
  value: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
  selected: PropTypes.bool,
  disabled: PropTypes.bool,
}

export default Selector
