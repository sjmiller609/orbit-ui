import React from 'react'
import PropTypes from 'prop-types'

import Configure from './Configure'
import Delete from './Delete'

import Data from '../Data'
import Module from '../../app/Module'

const Deployment = ({ deployments, menu, title }) => {
  const deployment = deployments[0]
  // TODO: Error handling
  if (!deployment) console.log('error')
  const menu2 = {
    ...menu,
  }
  menu2.level2.text = deployment.title
  // load form
  const data = {
    ...deployment,
  }

  return (
    <Module metaTitle={title + ' | ' + deployment.title} menu={menu}>
      <Configure title={title} data={data} deployment={deployment} />
      <Delete deployment={deployment} />
    </Module>
  )
}

Deployment.propTypes = {
  deployments: PropTypes.array,
  menu: PropTypes.object,
  title: PropTypes.string,
  onSuccess: PropTypes.func,
}

export default Data(Deployment)
