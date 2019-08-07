import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch, Redirect } from 'react-router-dom'

import { Load } from 'instruments'
import Data from '../Data/Pending'
import Module from '../../app/Module'

let Configure = Load(() =>
  import(/* webpackPrefetch: true */ '../UserConfigure')
)

if (self.admin) {
  Configure = Load(() =>
    import(/* webpackPrefetch: true */ '../../admin/Users/Configure')
  )
}

const User = ({ users, menu, title, admin }) => {
  const user = users[0]
  // Error handled
  if (!user) return <Module nada />

  const menu2 = {
    ...menu,
  }

  const name = user.fullName || user.email
  if (menu2.level2) menu2.level2.text = name

  let path = admin ? '/admin/pending/' : '/pending/'
  path += encodeURIComponent(user.email)

  return (
    <Module metaTitle={title + ' | ' + name} menu={menu}>
      <Switch>
        <Route
          path={path + '/configure'}
          exact
          render={() => <Configure user={user} admin pending />}
        />
        <Route
          path={path}
          exact
          render={() => <Redirect to={path + '/configure'} admin />}
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
  admin: PropTypes.bool,
}

export default Data(User)
