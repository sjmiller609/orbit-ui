import gql from 'graphql-tag'
import { deployment, deploymentConfig } from 'modules/api/fragments'

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
      $config: JSON
      $env: JSON
      $properties: JSON
    ) {
      createDeployment(
        workspaceUuid: $workspaceId
        type: $type
        label: $label
        version: $version
        description: $description
        config: $config
        env: $env
        properties: $properties
      ) {
        ...deployment
      }
    }
    ${deployment}
  `,
  UpdateDeployment: gql`
    mutation updateDeployment(
      $id: Uuid!
      $payload: JSON
      $config: JSON
      $env: JSON
      $sync: Boolean
    ) {
      updateDeployment(
        deploymentUuid: $id
        payload: $payload
        config: $config
        env: $env
        sync: $sync
      ) {
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
  DeploymentConfig: gql`
    query deploymentConfig(
      $workspaceId: Uuid
      $deploymentId: Uuid
      $type: String
      $version: String
    ) {
      deploymentConfig(
        workspaceUuid: $workspaceId
        deploymentUuid: $deploymentId
        type: $type
        version: $version
      ) {
        ...deploymentConfig
      }
    }
    ${deploymentConfig}
  `,
}
