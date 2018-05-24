import React from 'react'
import PropTypes from 'prop-types'

import s from './styles.scss'
import { Table } from '../../../instruments'

import Data from '../Data'

const List = ({ deployments, search }) => {
  return (
    <Table className={s.list} search={search}>
      {deployments.map(d => <p key={d.id}>{d.title}</p>)}
    </Table>
  )
}

List.propTypes = {
  deployments: PropTypes.array,
  search: PropTypes.object,
}

export default Data(List)
