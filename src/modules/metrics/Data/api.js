import gql from 'graphql-tag'

export default {
  Metrics: gql`
    subscription Metrics($deploymentUuid: Uuid!, $since: Int, $step: Int) {
      metrics(deploymentUuid: $deploymentUuid, since: $since, step: $step) {
        label
        result
      }
    }
  `,
}
