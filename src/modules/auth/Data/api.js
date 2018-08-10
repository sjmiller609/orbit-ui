import gql from 'graphql-tag'

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
  CreateToken: gql`
    mutation createToken(
      $authStrategy: AuthStrategy
      $credentials: String!
      $identity: String
      $duration: Int
    ) {
      createToken(
        authStrategy: $authStrategy
        identity: $identity
        credentials: $credentials
        duration: $duration
      ) {
        token {
          value
          payload {
            id: uuid
            iat
            exp
          }
        }
      }
    }
  `,
}
