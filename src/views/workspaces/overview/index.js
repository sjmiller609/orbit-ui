import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose, graphql, withApollo } from 'react-apollo';
import gql from 'graphql-tag';

import { getQueryProps, getMutationProps } from 'utils/apollo';
import { workspaces } from 'data/query/workspaces';

import PrivateLayout from 'layouts/private';
import Container from 'components/Container';
import Card from 'components/Card';
import Button from 'components/Button';
import Stars from 'components/Icons/Stars';
import ListItem from 'components/ListItem';
import SearchForm from 'components/Forms/Search';

import { workspaces as workspacesNav } from 'utils/nav';
import styles from './styles.module.css';

class WorkspacesOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: this.props.loading,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.loading && !this.props.loading) { this.setState({ loading: false }); }
  }

  render() {
    const { authUser, workspaces } = this.props;
    const { loading } = this.state;

    if (loading) return null;

    return (
      <PrivateLayout authUser={authUser} nav={workspacesNav}>
        <Container>
          <Card>
            {(workspaces === undefined || workspaces.length <= 0) && (
              <div className={styles.intro}>
                <Container>
                  <Stars />
                  <div>
                    <h2>Welcome to Astronomer</h2>
                    <p>Invite your team, launch deployments, and manage all your Airflow instances in one place.</p>
                    <Button type="link" to="/workspaces/new" theme="blueToGreen">
                      Create your workspace
                    </Button>
                  </div>
                </Container>
              </div>
            )}
            {(workspaces != undefined && workspaces.length > 0) && (
              <div>
                <div className={styles.actions}>
                  <SearchForm placeholder="Search workspaces" />
                  <Button type="link" to="/workspaces/new" theme="blueToGreen" className={styles.newButton}>
                    New workspace
                  </Button>
                </div>
                <div className={styles.workspaces}>
                  {workspaces.map(w =>
                    (<ListItem
                      key={`workspace-${w.id}`}
                      type="workspace"
                      icon={<Stars />}
                      to={`/w/${w.id}`}
                      data={w}
                    />))}
                </div>
              </div>
            )}
          </Card>
        </Container>
      </PrivateLayout>
    );
  }
}

export default compose(
  withRouter,
  graphql(workspaces, {
    props: getQueryProps('workspaces'),
    options: props => ({
      variables: {
        userId: props.authUser.userId,
        withUsers: false,
      },
    }),
  }),
)(WorkspacesOverview);
