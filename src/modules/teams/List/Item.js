'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import s from './styles.scss'
import { charLimit } from '../../../helpers/format'

import { TableRow, Box, P, H3, Icon } from '../../../instruments'

const Item = ({ team, className }) => {
  const columns = [
    <Box key="0" className={s.icon}>
      <Icon icon="stars" />
    </Box>,
    <Box key="1" align="flex-start" className={s.title}>
      <H3>{team.label}</H3>
    </Box>,
    <Box key="2" align="flex-start" className={s.log}>
      <P className={s.subTitle}>{charLimit(team.description, 75)}</P>
    </Box>,
  ]

  const to = '/teams/' + team.id

  return (
    <TableRow
      className={classnames(s.item, className)}
      columns={columns}
      to={to}
    />
  )
}

Item.propTypes = {
  team: PropTypes.object,
  className: PropTypes.string,
}

export default Item
