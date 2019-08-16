'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Row, Item } from 'instruments'
import s from './styles.scss'

const SubMenu = ({ menu, className }) => {
  if (!menu) return null
  return (
    <Row className={classnames(s.menu, className)} justify="flex-start" wrap>
      {menu.map(
        /* istanbul ignore next */
        m => (
          <Item
            to={m.to}
            key={m.text}
            backArrow={m.back}
            exact={m.exact}
            activeClassName={s.active}>
            {m.text}
          </Item>
        )
      )}
    </Row>
  )
}

SubMenu.propTypes = {
  className: PropTypes.string,
  menu: PropTypes.array,
}

export default SubMenu
