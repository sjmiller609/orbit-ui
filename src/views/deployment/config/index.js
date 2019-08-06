import React, {Component} from 'react'

import PrivateLayout from 'layouts/private';
import Container from 'components/Container';
import Card from 'components/Card';

import {deployment} from 'utils/nav';

class DeploymentConfig extends Component {
  render() {
    const {authUser, match} = this.props;
    const {workspaceId, deploymentId} = match.params;

    return (
      <PrivateLayout authUser={authUser} nav={deployment(workspaceId, deploymentId)}>
        <Container>
          <Card>
            [deployment config]
          </Card>
        </Container>
      </PrivateLayout>
    );
  }
}

export default DeploymentConfig
