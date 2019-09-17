import gql from 'graphql-tag'
import { deployment, deploymentConfig } from 'modules/api/fragments'

export default {
  Deployments: gql`
    query workspaceDeployments($workspaceId: Uuid!, $releaseName: String) {
      workspaceDeployments(
        workspaceUuid: $workspaceId
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
  UpdateAlerts: gql`
    mutation deploymentAlertsUpdate($id: Uuid!, $alertEmails: [String!]) {
      deploymentAlertsUpdate(deploymentUuid: $id, alertEmails: $alertEmails) {
        id: uuid
      }
    }
  `,
  DeleteDeployment: gql`
    mutation deleteDeployment($id: Uuid!) {
      deleteDeployment(deploymentUuid: $id) {
        id: uuid
      }
    }
  `,
  UpgradeDeployment: gql`
    mutation upgradeDeployment($id: Uuid!, $version: String!) {
      upgradeDeployment(deploymentUuid: $id, version: $version) {
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
