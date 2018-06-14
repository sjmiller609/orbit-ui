import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

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

  const path = '/deployments/' + deployment.release_name

  return (
    <Module metaTitle={title + ' | ' + deployment.title} menu={menu}>
      <Route
        path={path + '/configure'}
        exact
        render={() => (
          <Configure title={title} data={data} deployment={deployment} />
        )}
      />
      <Route
        path={path}
        exact
        render={() => <Delete deployment={deployment} />}
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
