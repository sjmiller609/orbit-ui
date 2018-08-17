import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

import { Load } from 'instruments'
import Data from '../Data'
import Module from '../../app/Module'

const User = ({ users, menu, title }) => {
  const user = users[0]
  // Error handled
  if (!user) return <Module nada />

  const menu2 = {
    ...menu,
  }
  menu2.level2.text = user.fullName

  const path = '/users/' + encodeURIComponent(user.username)

  return (
    <Module metaTitle={title + ' | ' + user.username} menu={menu}>
      <Route
        path={path + '/configure'}
        exact
        render={() => {
          const Configure = Load(() =>
            import(/* webpackPrefetch: true */ '../UserConfigure')
          )
          return <Configure user={user} />
        }}
      />
      <Route
        path={path}
        exact
        render={() => {
          return <Redirect to={path + '/configure'} />
          // const Overview = Load(() => import(/* webpackPrefetch: true */ '../UserOverview'))
          // return <Overview user={user} />
        }}
      />
    </Module>
  )
}

User.propTypes = {
  users: PropTypes.array,
  menu: PropTypes.object,
  title: PropTypes.string,
  onSuccess: PropTypes.func,
}

export default Data(User)
