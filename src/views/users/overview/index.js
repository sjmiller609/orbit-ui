import React, { Component } from 'react';

import PrivateLayout from 'layouts/private';
import Container from 'components/Container';
import Card from 'components/Card';

import { users } from 'utils/nav';

class UsersOverview extends Component {
  render() {
    const { authUser } = this.props;

    return (
      <PrivateLayout authUser={authUser} nav={users}>
        <Container>
          <Card>
            [service account]
          </Card>
        </Container>
      </PrivateLayout>
    );
  }
}

export default UsersOverview;
