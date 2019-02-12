import gql from 'graphql-tag'

export default {
  Logs: gql`
    query logs(
      $deploymentUuid: Uuid!
      $component: String!
      $since: JSON!
      $vars: JSON
    ) {
      logs(
        deploymentUuid: $deploymentUuid
        component: $component
        timestamp: $since
        search: $vars
      ) {
        id: uuid
        createdAt: timestamp
        log: message
      }
    }
  `,
  SubscribeLogs: gql`
    subscription log(
      $deploymentUuid: Uuid!
      $component: String!
      $since: JSON!
      $vars: JSON
    ) {
      log(
        deploymentUuid: $deploymentUuid
        component: $component
        timestamp: $since
        search: $vars
      ) {
        id: uuid
        createdAt: timestamp
        log: message
      }
    }
  `,
}
