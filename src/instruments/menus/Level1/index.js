'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { H2, Icon, Link, Dropdown, Item, MenuList } from '../../../instruments'
import s from './styles.scss'

// TODO: add dropdown
const Level1 = ({ text, to, active, className }) => {
  return (
    <Dropdown
      disable={!active}
      selector={
        <H2 className={classnames(s.menu, active && s.active, className)}>
          <React.Fragment>
            {active ? (
              text || 'My Team'
            ) : (
              <Link to={to}>{text || 'My Team'}</Link>
            )}
            <Icon icon="arrow" className={s.arrow} />
          </React.Fragment>
        </H2>
      }>
      <MenuList
        button={{
          to: '/teams/new',
          text: 'New Team',
        }}>
        <Item to="/" active>
          My Team
        </Item>
        <Item to="/">Superfriends</Item>
        <Item to="/">Watchmen</Item>
        <Item to="/">X-Men</Item>
        <Item to="/">Secret Avengers</Item>
        <Item to="/">Powerpuff Girls</Item>
        <Item to="/">Thundercats</Item>
      </MenuList>
    </Dropdown>
  )
}

Level1.propTypes = {
  text: PropTypes.string,
  to: PropTypes.string,
  active: PropTypes.bool,
  className: PropTypes.string,
}

export default Level1
