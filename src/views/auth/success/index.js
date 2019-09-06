import React, { Component } from 'react';
import { withRouter, Route, Redirect } from 'react-router-dom';
import { compose, graphql, withApollo } from 'react-apollo';
import gql from 'graphql-tag';

import auth from 'utils/token';
import { getParams } from 'utils/url';
import { getQueryProps } from 'utils/apollo';
import { getSelf } from 'data/query/self';
import { AuthContext } from 'utils/context';

class AuthSuccess extends Component {
  static contextType = AuthContext;

  constructor(props) {
    super(props);

    this.state = {
      loading: this.props.loading,
      cli: null,
      to: '/',
      track: 'User OAUTH from ',
      token: null,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.loading && !this.props.loading) { this.setState({ loading: false }); }
  }

  componentWillMount() {
    const { location, match } = this.props;
    let {
      cli, to, track, token, userId,
    } = this.state;
    const params = getParams(location.search);

    if (
      (params.extras.source && ~params.extras.source.indexOf('cli')) ||
      (match.params.service && ~match.params.service.indexOf('cli'))
    ) { cli = params.token; }

    if (params.extras.onSuccess) { to = params.extras.onSuccess; }

    token = params.token;

    auth.set({ token });
    this.setState({
      cli, to, track, token,
    });
  }

  componentDidMount = async () => {
    const { token } = this.state;
    const [{}, dispatch] = this.context;

    // Fetch the auth user and pass them to
    // the context so we can use their data
    // throughout the app with only 1 API call

    if (token != null) {
      try {
        dispatch({
          type: 'updateAuth',
          updateAuth: {
            token,
            user: await this.props.client.query({
              query: getSelf,
              variables: {},
            }),
          },
        });
      } catch (error) {
        console.log(error);
      }
    }
  }

  render() {
    const { loading } = this.state;
    if (this.state.cli) return <Redirect to="/token" />;
    return <Redirect to={this.state.to} />;
  }
}

export default compose(
  withApollo,
  withRouter,
)(AuthSuccess);
