import React, {Component} from 'react'

import PrivateLayout from 'layouts/private';
import Container from 'components/Container';
import Card from 'components/Card';

import {workspace} from 'utils/nav';

class NewDeployment extends Component {
  render() {
    const {authUser, match} = this.props;
    const {workspaceId} = match.params;

    return (
      <PrivateLayout authUser={authUser} nav={workspace(workspaceId)}>
        <Container>
          <Card>
            [add new deployment]
          </Card>
        </Container>
      </PrivateLayout>
    );
  }
}

export default NewDeployment
