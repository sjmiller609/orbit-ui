import gql from 'graphql-tag';

export const authConfig = gql`
  query authConfig(
    $redirect: String!
    $duration: Int
    $inviteToken: String
    $extras: JSON
  ) {
    authConfig(
      redirect: $redirect
      duration: $duration
      inviteToken: $inviteToken
      extras: $extras
    ) {
      localEnabled
      publicSignup
      initialSignup
      providers {
        name
        url
        displayName
      }
    }
  }
`;
