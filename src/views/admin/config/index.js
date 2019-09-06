import React, { Component } from 'react';

import PrivateLayout from 'layouts/private';
import Container from 'components/Container';
import Card from 'components/Card';

import { admin } from 'utils/nav';

class AdminConfig extends Component {
  render() {
    const { authUser } = this.props;

    return (
      <PrivateLayout authUser={authUser} nav={admin}>
        <Container>
          <Card>
            [deployment alerts]
          </Card>
        </Container>
      </PrivateLayout>
    );
  }
}

export default AdminConfig;
