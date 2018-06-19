import gql from 'graphql-tag'

const deployment = gql`
  fragment deployment on Deployment {
    id: uuid
    label
    type
    release_name
    version
    team {
      id: uuid
    }
    created_at
    updated_at
  }
`

export default {
  Deployments: gql`
    query deployments(
      $teamId: Uuid
      $deploymentId: Uuid
      $releaseName: String
    ) {
      deployments(
        teamUuid: $teamId
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
      $label: String!
      $teamId: Uuid
      $version: String
    ) {
      createDeployment(
        teamUuid: $teamId
        type: $type
        label: $label
        version: $version
      ) {
        ...deployment
      }
    }
    ${deployment}
  `,
  UpdateDeployment: gql`
    mutation updateDeployment($id: Uuid!, $title: String) {
      updateDeployment(deploymentUuid: $id, title: $title) {
        ...deployment
      }
    }
    ${deployment}
  `,
  DeleteDeployment: gql`
    mutation deleteDeployment($id: Uuid!) {
      deleteDeployment(deploymentUuid: $id) {
        id
      }
    }
  `,
}
