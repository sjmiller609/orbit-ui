import gql from 'graphql-tag'
import { deployment } from 'modules/api/fragments'

export default {
  Deployments: gql`
    query deployments(
      $workspaceId: Uuid
      $deploymentId: Uuid
      $releaseName: String
    ) {
      deployments(
        workspaceUuid: $workspaceId
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
      $workspaceId: Uuid!
      $version: String
      $description: String
    ) {
      createDeployment(
        workspaceUuid: $workspaceId
        type: $type
        label: $label
        version: $version
        description: $description
      ) {
        ...deployment
      }
    }
    ${deployment}
  `,
  UpdateDeployment: gql`
    mutation updateDeployment($id: Uuid!, $payload: JSON!) {
      updateDeployment(deploymentUuid: $id, payload: $payload) {
        ...deployment
      }
    }
    ${deployment}
  `,
  DeleteDeployment: gql`
    mutation deleteDeployment($id: Uuid!) {
      deleteDeployment(deploymentUuid: $id) {
        id: uuid
      }
    }
  `,
}
