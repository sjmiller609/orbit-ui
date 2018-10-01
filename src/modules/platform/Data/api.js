import gql from 'graphql-tag'
import { authUser, user } from 'modules/api/fragments'

export default {
  Self: gql`
    query self {
      self {
        ...authUser
      }
    }
    ${authUser}
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
