import gql from 'graphql-tag'

const deployment = gql`
  fragment deployment on Deployment {
    title
    type
    id: uuid
    release_name
    version
    creator {
      id
    }
  }
`

export default {
  Deployments: gql`
    query deployments($orgId: ID, $deploymentId: ID) {
      deployments(orgUuid: $orgId, deploymentUuid: $deploymentId) {
        ...deployment
      }
    }
    ${deployment}
  `,
  CreateDeployment: gql`
    mutation createDeployment(
      $type: String!
      $title: String!
      $version: String
    ) {
      createDeployment(type: $type, title: $title, version: $version) {
        success
        message
      }
    }
  `,
}
