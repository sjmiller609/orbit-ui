import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { compose, graphql, withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import { matchPath } from 'react-router';

import { getQueryProps, getMutationProps } from 'utils/apollo';
import { createWorkspace } from 'data/mutation/workspace';

import PrivateLayout from 'layouts/private';
import Container from 'components/Container';
import Card from 'components/Card';
import NewWorkspaceForm from 'components/Forms/NewWorkspace';

import { workspaces } from 'utils/nav';
import styles from './styles.module.css';

class NewWorkspace extends Component {
  state = {
    error: null,
  }

  handleSubmit = async (payload, e) => {
    try {
      const workspace = await this.props.createWorkspace(payload);
      const id = workspace.data.createWorkspace.id;
      this.props.history.push(`/w/${id}`);
    } catch (error) {
      this.setState({ error: JSON.stringify(error) });
    }
  };

  render() {
    const { authUser, location } = this.props;
    const { error } = this.state;

    return (
      <PrivateLayout authUser={authUser} nav={workspaces}>
        <Container>
          <Card>
            <div className={styles.content}>
              <h2>New Workspace</h2>
              <p>Invite your team, launch deployments, and manage all your Airflow instances in one place.</p>
            </div>
            <NewWorkspaceForm
              handleSubmit={this.handleSubmit}
              error={error}
            />
          </Card>
        </Container>
      </PrivateLayout>
    );
  }
}

export default compose(
  withRouter,
  graphql(createWorkspace, {
    props: getMutationProps('createWorkspace'),
  }),
)(NewWorkspace);
