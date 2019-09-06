import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from 'utils/context';


class PrivateRoute extends Component {
  static contextType = AuthContext;

  render() {
    const { component: Component, location, ...rest } = this.props;
    const [{ token, user }] = this.context;
    const authUser = user != undefined ? user.data.self.user : user;

    // If user is authenticated, let them view the page.
    if (token != undefined && user != undefined) {
      return (
        <Route
          {...rest}
          render={props => (
            <Component authUser={authUser} {...props} />
          )}
        />
      );
    }

    // Redirect back to signin if no auth info is found.
    return <Redirect to={{ pathname: '/' }} />;
  }
}

export default PrivateRoute;
