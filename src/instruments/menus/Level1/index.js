'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { H2, Icon, Link, Dropdown, Item, MenuList, Row } from 'instruments'
import s from './styles.scss'

const Level1 = ({ selected, list, addNew, active, className }) => {
  return (
    <Dropdown
      disable={!active}
      selector={
        <H2 className={classnames(s.menu, active && s.active, className)}>
          <Row>
            {/* The height property below is to ensure that larger letters don't get cut off in workspace titles */}
            <span className={s.text}>
              {active ? (
                selected.text
              ) : (
                <Link to={selected.to}>{selected.text}</Link>
              )}
            </span>
            <Icon icon="arrow" className={s.arrow} />
          </Row>
        </H2>
      }>
      <MenuList>
        {list.map(li => (
          <Item
            key={li.id}
            to={{
              pathname: '/workspaces/' + li.id,
              state: { from: location.pathname },
            }}
            active={li.id === selected.id}>
            {li.label}
          </Item>
        ))}
        <hr className={s.addNew} />
        <Item key="new" to={addNew.to}>
          {addNew.text}
        </Item>
      </MenuList>
    </Dropdown>
  )
}

Level1.propTypes = {
  selected: PropTypes.object,
  addNew: PropTypes.object,
  list: PropTypes.array,
  active: PropTypes.bool,
  className: PropTypes.string,
}

export default Level1
