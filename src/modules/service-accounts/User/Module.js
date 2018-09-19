import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch, Redirect } from 'react-router-dom'

import { Load } from 'instruments'
import Data from '../Data'
import Module from '../../app/Module'

// const Overview = Load(() => import(/* webpackPrefetch: true */ '../UserOverview'))
const Configure = Load(() =>
  import(/* webpackPrefetch: true */ '../UserConfigure')
)
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
      <Switch>
        <Route
          path={path + '/configure'}
          exact
          render={() => <Configure user={user} />}
        />
        <Route
          path={path}
          exact
          render={
            () => <Redirect to={path + '/configure'} />
            // return <Overview user={user} />
          }
        />

        <Redirect to="/404" />
      </Switch>
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
