'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import s from './styles.scss'
import { Row, H5, Icon, Link } from 'instruments'

// TODO: this tab title pattern should get extracted into its own instrument
const Tab = ({ name, selected, select }) => (
  <Link
    onClick={() => select(name)}
    title={name.charAt(0).toUpperCase() + name.slice(1)}
    className={classnames(s.button, name === selected && s.active)}>
    <Row>
      <Icon icon={name} />
      <H5>{name}</H5>
    </Row>
  </Link>
)

Tab.propTypes = {
  name: PropTypes.string,
  selected: PropTypes.string,
  select: PropTypes.func,
}

const Nav = props => {
  return (
    <Row className={s.tabs} justify="space-around" wrap>
      <Tab name="webserver" {...props} />
      <Tab name="scheduler" {...props} />
    </Row>
  )
}

Nav.propTypes = {
  selected: PropTypes.string,
  className: PropTypes.string,
}

export default Nav
