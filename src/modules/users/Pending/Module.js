import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch, Redirect } from 'react-router-dom'

import { Load } from 'instruments'
import Data from '../Data/Pending'
import Module from '../../app/Module'

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
  const name = user.fullName || user.email
  menu2.level2.text = name

  const path = '/pending/' + encodeURIComponent(user.email)

  return (
    <Module metaTitle={title + ' | ' + name} menu={menu}>
      <Switch>
        <Route
          path={path + '/configure'}
          exact
          render={() => <Configure user={user} pending />}
        />
        <Route
          path={path}
          exact
          render={() => <Redirect to={path + '/configure'} />}
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
}

export default Data(User)
