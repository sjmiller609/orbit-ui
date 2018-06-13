'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Row, Link } from '../../../instruments'
import s from './styles.scss'

const SubMenu = ({ menu, className }) => {
  if (!menu) return null
  return (
    <Row className={classnames(s.menu, className)} justify="flex-start" wrap>
      {menu.map(m => (
        <Link
          to={m.to || { ...location, pathname: m.getPath(location.pathname) }}
          key={m.text}
          exact={true}
          backArrow={m.back}
          activeClassName={s.active}>
          {m.text}
        </Link>
      ))}
    </Row>
  )
}

SubMenu.propTypes = {
  className: PropTypes.string,
  menu: PropTypes.array,
}

export default SubMenu
