import React from 'react'
import PropTypes from 'prop-types'

import Configure from './Configure'
import Data from '../Data'
import { Module } from '../../../instruments'

const Deployment = ({ deployments, menu, title, onSuccess }) => {
  const deployment = deployments[0]
  const menu2 = {
    ...menu,
  }
  menu2.level2.text = deployment.title
  const data = {
    ...deployment,
  }
  return (
    <Module metaTitle={title + ' | ' + deployment.title} menu={menu}>
      <Configure
        title={title}
        onSuccess={onSuccess}
        data={data}
        deployment={deployment}
      />
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
