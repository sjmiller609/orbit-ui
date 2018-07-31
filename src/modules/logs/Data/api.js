import gql from 'graphql-tag'

export default {
  Logs: gql`
    query logs {
      logs {
        id: uuid
        createdAt
        log
      }
    }
  `,
  SubscribeLogs: gql`
    subscription log {
      log {
        id: uuid
        createdAt
        log
      }
    }
  `,
}
