import gql from 'graphql-tag'

export default {
  // Logs: gql`
  //   query logs {
  //     logs {
  //       id: uuid
  //       createdAt
  //       log
  //     }
  //   }
  // `,
  Logs: gql`
    query logs {
      logs {
        id: level
        timestamp
        log: message
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
