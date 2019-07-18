import gql from 'graphql-tag'

export default {
  Metrics: gql`
    subscription Metrics(
      $deploymentUuid: Uuid!
      $since: Int
      $step: Int
      $metricType: [MetricType]
    ) {
      metrics(
        deploymentUuid: $deploymentUuid
        since: $since
        step: $step
        metricType: $metricType
      ) {
        label
        result
      }
    }
  `,
}
