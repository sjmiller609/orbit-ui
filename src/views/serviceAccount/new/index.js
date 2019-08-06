import React, {Component} from 'react'

import PrivateLayout from 'layouts/private';
import Container from 'components/Container';
import Card from 'components/Card';

import {serviceAccounts} from 'utils/nav';

class NewServiceAccount extends Component {
  render() {
    const {authUser} = this.props;

    return (
      <PrivateLayout authUser={authUser} nav={serviceAccounts}>
        <Container>
          <Card>
            [add new service account]
          </Card>
        </Container>
      </PrivateLayout>
    );
  }
}

export default NewServiceAccount
