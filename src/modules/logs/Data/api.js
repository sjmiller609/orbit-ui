import gql from 'graphql-tag'

export default {
  Logs: gql`
    query logs($component: String!, $since: JSON!) {
      logs(component: $component, timestamp: $since) {
        id: uuid
        createdAt: timestamp
        log: message
      }
    }
  `,

  SubscribeLogs: gql`
    subscription log($component: String!, $since: JSON!) {
      log(component: $component, timestamp: $since) {
        id: uuid
        createdAt: timestamp
        log: message
      }
    }
  `,
}
