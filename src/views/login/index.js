import React, {Component} from 'react'
import {withRouter, Link} from 'react-router-dom';
import {compose, graphql, withApollo} from 'react-apollo';
import gql from 'graphql-tag';

import auth from 'utils/token';
import {getQueryProps, getMutationProps} from 'utils/apollo';
import {authConfig} from 'data/query/auth';
import {login} from 'data/mutation/auth';

import {AuthContext} from 'utils/context';

import PublicLayout from 'layouts/public'
import Container from 'components/Container'
import Card from 'components/Card'
import LoginForm from 'components/Forms/Login'

import styles from './styles.module.css';

class Login extends Component {
  static contextType = AuthContext;

  constructor(props) {
    super(props);

    this.state = {
      loading: this.props.loading,
      error: null
    };
  }

  componentDidUpdate(prevProps) {
    if(prevProps.loading && !this.props.loading)
      this.setState({ loading: false });
  }

  handleSubmit = async(payload) => {
    const [{}, dispatch] = this.context;
    try {
      // If create & login is successful, update the app's
      // auth context and push the user along.

      const login = await this.props.login(payload);
      console.log(login);

      dispatch({
        type: 'updateAuth',
        updateAuth: {
          token: login.data.createToken.token.value,
          user: login.data.createToken.user
        }
      })

      console.log('dispatched');

      auth.set({token: login.data.createToken.token.value});
      this.props.history.push('/workspaces');

    } catch (error) {
      this.setState({ error: JSON.stringify(error) });
    }
  };

  render() {
    const { loading, error } = this.state;
    const { authConfig } = this.props;

    return (
      <PublicLayout nav={<p>New to Astronomer? <Link to="/">Sign Up</Link></p>}>
        <Container>
          <div className={styles.content}>
            <h1>Welcome Back</h1>
            <h2>Tip: Learn best practices for<br />using Airflow in Astronomer's Guides.</h2>
          </div>
          <Card
            footer={
              <p>
                Please review{' '}
                <a href="https://www.astronomer.io/terms" target="_blank">terms of service</a>
                {' '}and{' '}
                <a href="https://www.astronomer.io/privacy" target="_blank"> privacy policy</a>
                {' '}prior to signing up for Astronomer Cloud.
              </p>
            }
          >
          {!loading && (
            <LoginForm
              handleSubmit={this.handleSubmit}
              error={error}
              authConfig={authConfig}
            />
          )}
          </Card>
        </Container>
      </PublicLayout>
    );
  }
}

export default compose(
  withRouter,
  graphql(authConfig, {
    props: getQueryProps('authConfig'),
    options: ({ authConfig }) => ({
      variables: {
        redirect: '/oauth',
        duration: 7 // set to max days
      }
    })
  }),
  graphql(login, {
    props: getMutationProps('login')
  })
)(Login);
