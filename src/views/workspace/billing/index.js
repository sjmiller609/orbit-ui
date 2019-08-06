import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import {compose, graphql, withApollo} from 'react-apollo';
import gql from 'graphql-tag';

import {getQueryProps} from 'utils/apollo';
import {workspaces} from 'data/query/workspaces';

import PrivateLayout from 'layouts/private';
import Container from 'components/Container';
import Card from 'components/Card';
import Button from 'components/Button';

import {workspace as workspaceNav} from 'utils/nav';

class WorkspaceBilling extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: this.props.loading,
    };
  }

  componentDidUpdate(prevProps) {
    if(prevProps.loading && !this.props.loading)
      this.setState({ loading: false });
  }

  render() {
    const {authUser, workspaces: workspace, match} = this.props;
    const {workspaceId} = match.params;
    const {loading} = this.state;

    if(loading) return null;

    return (
      <PrivateLayout authUser={authUser} nav={workspaceNav(workspaceId)}>
        <Container>
          <Card>
            [workspace billing]
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
    options: (props) => ({
      variables: {
        workspaceId: props.match.params.workspaceId,
        withUsers: false
      }
    })
  }),
)(WorkspaceBilling);
