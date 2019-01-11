import gql from 'graphql-tag'

export default {
  Logs: gql`
    query logs($component: String!, $since: JSON!, $vars: JSON) {
      logs(component: $component, timestamp: $since, search: $vars) {
        id: uuid
        createdAt: timestamp
        log: message
      }
    }
  `,
  SubscribeLogs: gql`
    subscription log($component: String!, $since: JSON!, $vars: JSON) {
      log(component: $component, timestamp: $since, search: $vars) {
        id: uuid
        createdAt: timestamp
        log: message
      }
    }
  `,
}
