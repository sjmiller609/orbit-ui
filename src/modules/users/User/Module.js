import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

// import DeploymentConfigure from '../DeploymentConfigure'
// import DeploymentOverview from '../DeploymentOverview'
import { Load } from 'instruments'
import Data from '../Data'
import Module from '../../app/Module'

const User = ({ user, menu, title }) => {
  //  const user = deployments[0]
  // Error handled
  if (!user) return <Module nada />

  const menu2 = {
    ...menu,
  }
  menu2.level2.text = user.username

  const path = '/users/' + user.username

  return (
    <Module metaTitle={title + ' | ' + user.username} menu={menu}>
      <Route
        path={path + '/configure'}
        exact
        render={() => {
          const Configure = Load(() => import('../UserConfigure'))
          return <Configure user={user} />
        }}
      />
      <Route
        path={path}
        exact
        render={() => {
          const Overview = Load(() => import('../UserOverview'))
          return <Overview user={user} />
        }}
      />
    </Module>
  )
}

User.propTypes = {
  user: PropTypes.object,
  menu: PropTypes.object,
  title: PropTypes.string,
  onSuccess: PropTypes.func,
}

export default Data(User)
