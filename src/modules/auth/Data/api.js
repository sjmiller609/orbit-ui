import gql from 'graphql-tag'

export default {
  AuthConfig: gql`
    query authConfig($state: String) {
      authConfig(state: $state) {
        localEnabled
        googleEnabled
        googleOAuthUrl
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
        user {
          id: uuid
        }
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
