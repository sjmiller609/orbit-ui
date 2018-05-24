'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Card, Search } from '../../../instruments'
import s from './styles.scss'

const Table = ({ children, search, className }) => {
  return (
    <Card
      className={classnames(s.table, className)}
      header={
        <div className={s.header}>
          <Search
            search={search.call}
            text={search.text}
            placeholder={search.placeholder}
          />
        </div>
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
}

export default Table
