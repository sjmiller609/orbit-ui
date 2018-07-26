'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Card, Search, Button, Row } from 'instruments'
import s from './styles.scss'
import NoResults from './NoResults'

const Table = ({ children, search, className, button, Empty, Container }) => {
  const button2 = button && <Button to={button.to}>{button.text}</Button>
  const search2 = search && (
    <Search
      search={search.call}
      text={search.text}
      placeholder={search.placeholder}
      className={s.search}
      noDelay={!search.delay}
    />
  )
  // if empty
  if (Empty && (!search || !search.text) && (!children || !children.length))
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
          {search2}
          {button2}
        </Row>
      }>
      <Container>
        {Array.isArray(children) ? children.map(el => el) : children}
        {count === 0 && search.text && <NoResults />}
      </Container>
    </Card>
  )
}

Table.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
  className: PropTypes.string,
  search: PropTypes.object,
  button: PropTypes.object,
  Empty: PropTypes.func,
  Container: PropTypes.func,
}

Table.defaultProps = {
  Container: React.Fragment,
}

export default Table
