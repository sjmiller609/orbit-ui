import React, {Component} from 'react'
import {withRouter, Link} from 'react-router-dom';
import {compose, graphql, withApollo} from 'react-apollo';
import gql from 'graphql-tag';

import auth from 'utils/token';
import {getQueryProps, getMutationProps} from 'utils/apollo';
import {authConfig} from 'data/query/auth';
import {createUser, login} from 'data/mutation/auth';

import {AuthContext} from 'utils/context';

import PublicLayout from 'layouts/public'
import Container from 'components/Container'
import Card from 'components/Card'
import SignupForm from 'components/Forms/Signup'

import styles from './styles.module.css';

class Signup extends Component {
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

  handleSubmit = async(payload, e) => {
    const [{}, dispatch] = this.context;
    try {
      // If create & login is successful, update the app's
      // auth context and push the user along.

      await this.props.createUser(payload);
      const login = await this.props.login(payload);

      dispatch({
        type: 'updateAuth',
        updateAuth: {
          token: login.data.createToken.token.value,
          user: login.data.createToken.user
        }
      })

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
      <PublicLayout nav={<p>Already have an account? <Link to="/login">Login</Link></p>}>
        <Container>
          <div className={styles.content}>
            <h1>Welcome to Astronomer</h1>
            <h2>Automate data pipelines with<br />Apache Airflow in minutes.</h2>
            <ul className={styles.contentList}>
              <li>One-click deployments</li>
              <li>Scale effortlessly</li>
              <li>Developer-friendly tools</li>
            </ul>
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
            <SignupForm
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
  graphql(createUser, {
    props: getMutationProps('createUser')
  }),
  graphql(login, {
    props: getMutationProps('login')
  })
)(Signup);
