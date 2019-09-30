import React from 'react'
import PropTypes from 'prop-types'

import s from './styles.scss'
import { Table } from 'instruments'

import Data from '../Data'
import Item from './Item'
import Empty from './Empty'

const List = ({ newWorkspaceTo, deployments, search, latestVersion }) => {
  const button = {
    text: 'New Deployment',
    to: newWorkspaceTo,
  }
  return (
    <Table className={s.list} search={search} button={button} Empty={Empty}>
      {deployments &&
        deployments.map(d => (
          <Item key={d.id} deployment={d} latestVersion={latestVersion} />
        ))}
    </Table>
  )
}

List.propTypes = {
  deployments: PropTypes.array,
  search: PropTypes.object,
  newWorkspaceTo: PropTypes.string,
  latestVersion: PropTypes.string,
}

export default Data(List)
