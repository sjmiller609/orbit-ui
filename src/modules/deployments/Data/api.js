import gql from 'graphql-tag'

export default {
  Deployments: gql`
    query deployments($orgId: ID, $deploymentId: ID) {
      deployments(orgUuid: $orgId, deploymentUuid: $deploymentId) {
        title
        type
        uuid
        release_name
        version
        creator {
          id
        }
      }
    }
  `,
}
