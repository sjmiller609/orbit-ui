import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose, graphql, withApollo } from 'react-apollo';
import gql from 'graphql-tag';

import storage from 'utils/storage';
import { getQueryProps } from 'utils/apollo';
import { workspaces } from 'data/query/workspaces';
import { deployments } from 'data/query/deployments';

import PrivateLayout from 'layouts/private';
import Container from 'components/Container';
import Card from 'components/Card';
import Button from 'components/Button';
import Stars from 'components/Icons/Stars';
import ListItem from 'components/ListItem';
import SearchForm from 'components/Forms/Search';

import { workspace as workspaceNav } from 'utils/nav';
import styles from './styles.module.css';

class WorkspaceOverview extends Component {
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
    const {
      authUser, workspaces: workspace, deployments, match,
    } = this.props;
    const { workspaceId } = match.params;
    const { loading } = this.state;

    if (loading) return null;

    return (
      <PrivateLayout authUser={authUser} nav={workspaceNav(workspaceId)}>
        <Container>
          <Card>
            {deployments === undefined || deployments.length <= 0 && (
              <p>[create a deployment]</p>
            )}
            {(deployments != undefined && deployments.length > 0) && (
              <div>
                <div className={styles.actions}>
                  <SearchForm placeholder="Search deployments" />
                  <Button
                    type="link"
                    to={`/w/${workspaceId}/d/new`}
                    theme="blueToGreen"
                    className={styles.newButton}
                  >
                    New deployment
                  </Button>
                </div>
                <div className={styles.deployments}>
                  {deployments.map(d =>
                    (<ListItem
                      key={`deployment-${d.id}`}
                      type="deployment"
                      icon={<Stars />}
                      to={`/w/${workspaceId}/d/${d.id}`}
                      data={d}
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
        workspaceId: props.match.params.workspaceId,
        withUsers: true,
      },
    }),
  }),
  graphql(deployments, {
    props: getQueryProps('deployments'),
    options: props => ({
      variables: {
        workspaceId: props.match.params.workspaceId,
      },
    }),
  }),
)(WorkspaceOverview);
