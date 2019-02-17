import gql from 'graphql-tag'

export default {
  Logs: gql`
    query logs(
      $deploymentUuid: Uuid!
      $component: String
      $timestamp: DateTime
      $search: String
    ) {
      logs(
        deploymentUuid: $deploymentUuid
        component: $component
        timestamp: $timestamp
        search: $search
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
      $component: String
      $timestamp: DateTime
      $search: String
    ) {
      log(
        deploymentUuid: $deploymentUuid
        component: $component
        timestamp: $timestamp
        search: $search
      ) {
        id: uuid
        createdAt: timestamp
        log: message
      }
    }
  `,
}
