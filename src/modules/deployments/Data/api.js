import gql from 'graphql-tag'

// TODO: import creator fragment

const deployment = gql`
  fragment deployment on Deployment {
    title
    type
    id: uuid
    release_name
    version
    createdAt
    updatedAt
    creator {
      id
    }
  }
`

export default {
  Deployments: gql`
    query deployments($orgId: ID, $deploymentId: ID, $releaseName: String) {
      deployments(
        orgUuid: $orgId
        deploymentUuid: $deploymentId
        releaseName: $releaseName
      ) {
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
  UpdateDeployment: gql`
    mutation updateDeployment($id: ID!, $title: String) {
      updateDeployment(deploymentUuid: $id, title: $title) {
        success
        message
      }
    }
  `,
}
