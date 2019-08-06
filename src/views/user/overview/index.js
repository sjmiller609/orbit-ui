import React, {Component} from 'react'

import PrivateLayout from 'layouts/private';
import Container from 'components/Container';
import Card from 'components/Card';

import {user} from 'utils/nav';

class UserOverview extends Component {
  render() {
    const {authUser} = this.props;

    return (
      <PrivateLayout authUser={authUser} nav={user}>
        <Container>
          <Card>
            [user profile]
          </Card>
        </Container>
      </PrivateLayout>
    );
  }
}

export default UserOverview
