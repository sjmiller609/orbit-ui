import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch, Redirect } from 'react-router-dom'

import { Load } from 'instruments'
import Data from '../Data'
import Module from '../../app/Module'

const Configure = Load(() =>
  import(/* webpackPrefetch: true */ '../UserConfigure')
)

class User extends React.Component {
  render() {
    const { user, menu, title } = this.props

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
            render={() => <Redirect to={path + '/configure'} />}
          />
          <Redirect to="/404" />
        </Switch>
      </Module>
    )
  }
}

User.propTypes = {
  user: PropTypes.object,
  menu: PropTypes.object,
  title: PropTypes.string,
  onSuccess: PropTypes.func,
  admin: PropTypes.bool,
}

export default Data(User)
