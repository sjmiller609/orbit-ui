import React, { Component } from 'react';

import PrivateLayout from 'layouts/private';
import Container from 'components/Container';
import Card from 'components/Card';

import { serviceAccount } from 'utils/nav';

class ServiceAccountOverview extends Component {
  render() {
    const { authUser } = this.props;

    return (
      <PrivateLayout authUser={authUser} nav={serviceAccount}>
        <Container>
          <Card>
            [service account]
          </Card>
        </Container>
      </PrivateLayout>
    );
  }
}

export default ServiceAccountOverview;
