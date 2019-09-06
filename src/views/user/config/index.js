import React, { Component } from 'react';

import PrivateLayout from 'layouts/private';
import Container from 'components/Container';
import Card from 'components/Card';

import { user } from 'utils/nav';

class UserConfig extends Component {
  render() {
    const { authUser } = this.props;

    return (
      <PrivateLayout authUser={authUser} nav={user}>
        <Container>
          <Card>
            [add new user]
          </Card>
        </Container>
      </PrivateLayout>
    );
  }
}

export default UserConfig;
