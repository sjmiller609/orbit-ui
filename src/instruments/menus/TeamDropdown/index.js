'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { H2, Icon } from '../../../instruments'
import s from './styles.scss'

const TeamDropdown = ({ className }) => {
  return (
    <H2 className={classnames(s.menu, className)}>
      My Team
      <Icon icon="arrow" className={classnames(s.arrow)} />
    </H2>
  )
}

TeamDropdown.propTypes = {
  className: PropTypes.string,
}

export default TeamDropdown
