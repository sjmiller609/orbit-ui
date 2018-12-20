import gql from 'graphql-tag'

export default {
  Logs: gql`
    query logs($component: String!) {
      logs(component: $component) {
        id: uuid
        createdAt: timestamp
        log: message
      }
    }
  `,

  SubscribeLogs: gql`
    subscription log($component: String!) {
      log(component: $component) {
        id: uuid
        createdAt: timestamp
        log: message
      }
    }
  `,
}
