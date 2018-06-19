import gql from 'graphql-tag'

const deployment = gql`
  fragment deployment on Deployment {
    id: uuid
    label
    type
    release_name
    version
    team
    createdAt
    updatedAt
  }
`

export default {
  Deployments: gql`
    query deployments($teamId: ID, $deploymentId: ID, $releaseName: String) {
      deployments(
        teamUuid: $teamId
        deploymentUuid: $deploymentId
        release_name: $releaseName
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
        ...deployment
      }
    }
    ${deployment}
  `,
  UpdateDeployment: gql`
    mutation updateDeployment($id: ID!, $title: String) {
      updateDeployment(deploymentUuid: $id, title: $title) {
        ...deployment
      }
    }
    ${deployment}
  `,
  DeleteDeployment: gql`
    mutation deleteDeployment($id: ID!) {
      deleteDeployment(deploymentUuid: $id) {
        id
      }
    }
  `,
}
