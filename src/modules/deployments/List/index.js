import React from 'react'
import s from './styles.scss'
import { Card } from '../../../instruments'

import Data from '../Data'

const List = ({ data: { deployments } }) => {
  return (
    <Card className={s.list}>
      <p>{deployments && deployments[0] ? deployments[0].title : 'none'}</p>
    </Card>
  )
}

export default Data(List)
