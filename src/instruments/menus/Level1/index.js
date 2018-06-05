'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { H2, Icon, Link } from '../../../instruments'
import s from './styles.scss'

// TODO: add dropdown
const Level1 = ({ text, to, active, className }) => {
  return (
    <H2 className={classnames(s.menu, active && s.active, className)}>
      <React.Fragment>
        <Link to={to}>{text || 'My Team'}</Link>
        <Icon icon="arrow" className={s.arrow} />
      </React.Fragment>
    </H2>
  )
}

Level1.propTypes = {
  text: PropTypes.string,
  to: PropTypes.string,
  active: PropTypes.bool,
  className: PropTypes.string,
}

export default Level1
