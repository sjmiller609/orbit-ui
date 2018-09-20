import React from 'react'
import PropTypes from 'prop-types'

import s from './styles.scss'
import { Table } from 'instruments'

import Data from '../Data'
import Item from './Item'
import Empty from './Empty'

const List = ({ serviceAccounts, path, search }) => {
  const button = {
    text: 'New Service Account',
    to: path + '/new',
  }
  return (
    <Table className={s.list} search={search} button={button} Empty={Empty}>
      {serviceAccounts.map(t => (
        <Item key={t.id} serviceAccount={t} path={path} />
      ))}
    </Table>
  )
}

List.propTypes = {
  serviceAccounts: PropTypes.array,
  search: PropTypes.object,
  path: PropTypes.string,
}

export default Data(List)
