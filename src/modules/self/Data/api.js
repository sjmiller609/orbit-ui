import gql from 'graphql-tag'
import { user } from 'modules/api/fragments'

export default {
  Self: gql`
    query self {
      self {
        ...user
      }
    }
    ${user}
  `,
  UpdateSelf: gql`
    mutation updateUser($payload: JSON!) {
      updateUser(payload: $payload) {
        ...user
      }
    }
    ${user}
  `,
}
