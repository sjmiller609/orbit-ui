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
}
