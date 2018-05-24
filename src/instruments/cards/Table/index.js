'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Card, Search, Button, Row } from '../../../instruments'
import s from './styles.scss'

const Table = ({ children, search, className, button }) => {
  return (
    <Card
      className={classnames(s.table, className)}
      header={
        <Row justify="space-between" className={s.header}>
          <Search
            search={search.call}
            text={search.text}
            placeholder={search.placeholder}
            className={s.search}
          />
          {button && <Button text={button.text} to={button.to} />}
        </Row>
      }>
      <React.Fragment>
        {Array.isArray(children) ? children.map(el => el) : children}
      </React.Fragment>
    </Card>
  )
}

Table.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
  className: PropTypes.string,
  search: PropTypes.object,
  button: PropTypes.object,
}

export default Table
