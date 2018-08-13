import gql from 'graphql-tag'
import { authUser } from 'modules/api/fragments'

export default {
  AuthConfig: gql`
    query authConfig($redirect: String!, $duration: Int, $extras: JSON) {
      authConfig(redirect: $redirect, duration: $duration, extras: $extras) {
        localEnabled
        googleEnabled
        googleOAuthUrl
        githubEnabled
        githubOAuthUrl
        auth0Enabled
        auth0OAuthUrl
      }
    }
  `,
  Login: gql`
    mutation createToken(
      $password: String!
      $email: String
      $duration: Int
      $workspaceId: String
      $permission: String
    ) {
      createToken(
        password: $password
        identity: $email
        workspaceUuid: $workspaceId
        permission: $permission
        duration: $duration
      ) {
        ...authUser
      }
    }
    ${authUser}
  `,
  Signup: gql`
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
  `,
}
