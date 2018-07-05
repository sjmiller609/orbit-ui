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
}
