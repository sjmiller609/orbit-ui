'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Card, Search, Button, Row } from '../../../instruments'
import s from './styles.scss'

const Table = ({ children, search, className, button, Empty }) => {
  const button2 = button && <Button to={button.to}>{button.text}</Button>
  // if empty
  if (!search.text && (!children || !children.length))
    return (
      <Card className={classnames(s.table, s.empty, className)}>
        {Empty({ button: button2 })}
      </Card>
    )
  let count = Array.isArray(children) ? children.length : 1
  if (!children) count = 0
  return (
    <Card
      className={classnames(s.table, count === 1 && s.one, className)}
      header={
        <Row justify="space-between" className={s.header}>
          <Search
            search={search.call}
            text={search.text}
            placeholder={search.placeholder}
            className={s.search}
            noDelay={!search.delay}
          />
          {button2}
        </Row>
      }>
      <React.Fragment>
        {Array.isArray(children) ? children.map(el => el) : children}
        {/* no results */}
      </React.Fragment>
    </Card>
  )
}

Table.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
  className: PropTypes.string,
  search: PropTypes.object,
  button: PropTypes.object,
  Empty: PropTypes.func,
}

export default Table
