import gql from 'graphql-tag'
import { authUser } from '../fragments'

export const getSelf = gql`
  query self {
    self {
      ...authUser
    }
  }
  ${authUser}
`
