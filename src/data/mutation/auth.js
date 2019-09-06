import gql from 'graphql-tag';
import { authUser } from '../fragments';

export const login = gql`
  mutation createToken($password: String!, $email: String, $duration: Int) {
    createToken(password: $password, identity: $email, duration: $duration) {
      ...authUser
    }
  }
  ${authUser}
`;

export const createUser = gql`
  mutation createUser(
    $email: String!
    $password: String!
    $username: String
    $profile: JSON
    $inviteToken: String
    $duration: Int
  ) {
    createUser(
      email: $email
      password: $password
      username: $username
      profile: $profile
      inviteToken: $inviteToken
      duration: $duration
    ) {
      ...authUser
    }
  }
  ${authUser}
`;
