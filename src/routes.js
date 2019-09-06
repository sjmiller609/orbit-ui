import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import PrivateRoute from 'containers/PrivateRoute';
import { AuthContext } from 'utils/context';

// General views
import Signup from 'views/signup';
import Login from 'views/login';
import Signout from 'views/signout';

// Auth views
import ForgotPassword from 'views/auth/password/forgot';
import ResetPassword from 'views/auth/password/reset';
import Verify from 'views/auth/verify';
import ResendVerify from 'views/auth/verify/resend';
import Token from 'views/auth/token';
import AuthSuccess from 'views/auth/success';

// Admin views
import Admin from 'views/admin/overview';
import AdminConfig from 'views/admin/config';

// Workspaces views
import Workspaces from 'views/workspaces/overview';

// Workspace views
import Workspace from 'views/workspace/overview';
import WorkspaceAddNew from 'views/workspaces/new';
import WorkspaceConfig from 'views/workspace/config';
import WorkspaceBilling from 'views/workspace/billing';

// Deployment views
import Deployment from 'views/deployment/overview';
import DeploymentAddNew from 'views/deployment/new';
import DeploymentConfig from 'views/deployment/config';
import DeploymentLogs from 'views/deployment/logs';
import DeploymentMetrics from 'views/deployment/metrics';
import DeploymentAlerts from 'views/deployment/alerts';

// Service Account views
import ServiceAccounts from 'views/serviceAccounts/overview';
import ServiceAccount from 'views/serviceAccount/overview';

// User views
import Users from 'views/users/overview';
import UsersAddNew from 'views/user/new';
import User from 'views/user/overview';
import UserConfig from 'views/user/config';

class Routes extends Component {
  static contextType = AuthContext;

  render() {
    const [{ token }] = this.context;

    return (
      <Fragment>
        <Helmet>
          <link rel="shortcut icon" href="/static/favicon.ico" />
        </Helmet>
        <Switch>
          // Root path
          {token === undefined
            ? <Route exact path="/" render={Signup} />
            : <PrivateRoute exact path="/" component={Workspaces} />
          }

          // General routes
          <Route exact path="/login" render={Login} />
          <Route exact path="/signout" render={Signout} />

          // Auth routes
          <Route exact path="/oauth" component={AuthSuccess} />
          <Route exact path="/forgot-password" render={ForgotPassword} />
          <Route exact path="/forgot-password/sent" render={ForgotPassword} />
          <Route exact path="/reset-password" render={ResetPassword} />
          <Route exact path="/resend-verify" render={ResendVerify} />
          <Route exact path="/verify" render={Verify} />

          // Util routes
          <PrivateRoute exact path="/token" component={Token} />

          // Admin routes
          <PrivateRoute exact path="/admin" component={Admin} />
          <PrivateRoute exact path="/admin/config" component={AdminConfig} />
          <PrivateRoute exact path="/admin/users" component={Users} />
          <PrivateRoute exact path="/admin/u/:userId" component={User} />

          // Workspaces routes
          <PrivateRoute exact path="/workspaces" component={Workspaces} />
          <PrivateRoute exact path="/workspaces/new" component={WorkspaceAddNew} />

          // Workspace routes
          <PrivateRoute exact path="/w/:workspaceId" component={Workspace} />
          <PrivateRoute exact path="/w/:workspaceId/config" component={WorkspaceConfig} />
          <PrivateRoute exact path="/w/:workspaceId/billing" component={WorkspaceBilling} />
          <PrivateRoute exact path="/w/:workspaceId/users" component={Users} />
          <PrivateRoute exact path="/w/:workspaceId/u/:id" component={User} />
          <PrivateRoute exact path="/w/:workspaceId/service-accounts" component={ServiceAccounts} />
          <PrivateRoute exact path="/w/:workspaceId/s/:serviceAccountId" component={ServiceAccount} />

          // Deployment routes
          <PrivateRoute exact path="/w/:workspaceId/d/new" component={DeploymentAddNew} />
          <PrivateRoute exact path="/w/:workspaceId/d/:deplymentId" component={Deployment} />
          <PrivateRoute exact path="/w/:workspaceId/d/:deplymentId/config" component={DeploymentConfig} />
          <PrivateRoute exact path="/w/:workspaceId/d/:deplymentId/logs" component={DeploymentLogs} />
          <PrivateRoute exact path="/w/:workspaceId/d/:deplymentId/metrics" component={DeploymentMetrics} />
          <PrivateRoute exact path="/w/:workspaceId/d/:deplymentId/alerts" component={DeploymentAlerts} />

          // Users routes
          <PrivateRoute exact path="/users" component={Users} />
          <PrivateRoute exact path="/users/new" component={UsersAddNew} />

          // User routes
          <PrivateRoute exact path="/u/:userId" component={User} /> // profile
          <PrivateRoute exact path="/u/:userId/config" component={UserConfig} />

          // Error routes
          <Route exact path="/(404|500|503|houston-down)" />
          <Route exact path="'/error'" />
        </Switch>
      </Fragment>
    );
  }
}

export default Routes;
