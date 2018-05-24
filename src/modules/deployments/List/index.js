import React from 'react'
import PropTypes from 'prop-types'

import s from './styles.scss'
import { Table } from '../../../instruments'

import Data from '../Data'

const List = ({ deployments }) => {
  return (
    <Table className={s.list}>
      {deployments.map(d => <p key={d.deploymentId}>{d.title}</p>)}
    </Table>
  )
}

List.propTypes = {
  deployments: PropTypes.array,
}

export default Data(List)
