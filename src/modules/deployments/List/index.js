import React from 'react'
import PropTypes from 'prop-types'

import s from './styles.scss'
import { Table } from '../../../instruments'

import Data from '../Data'

const List = ({ deployments, search }) => {
  const button = {
    text: 'New Deployment',
    to: '/deployments/new',
  }
  return (
    <Table className={s.list} search={search} button={button}>
      {deployments.map(d => <p key={d.id}>{d.title}</p>)}
    </Table>
  )
}

List.propTypes = {
  deployments: PropTypes.array,
  search: PropTypes.object,
}

export default Data(List)
