import gql from 'graphql-tag'
import { serviceAccount } from 'modules/api/fragments'

export default {
  DeploymentServiceAccounts: gql`
    query deploymentServiceAccounts($deploymentUuid: Uuid!) {
      deploymentServiceAccounts(deploymentUuid: $deploymentUuid) {
        ...serviceAccount
      }
    }
    ${serviceAccount}
  `,
  WorkspaceServiceAccounts: gql`
    query workspaceServiceAccounts($workspaceUuid: Uuid!) {
      workspaceServiceAccounts(workspaceUuid: $workspaceUuid) {
        ...serviceAccount
      }
    }
    ${serviceAccount}
  `,
  DeploymentServiceAccount: gql`
    query deploymentServiceAccount($serviceAccountUuid: Uuid!) {
      deploymentServiceAccount(serviceAccountUuid: $serviceAccountUuid) {
        ...serviceAccount
      }
    }
    ${serviceAccount}
  `,
  WorkspaceServiceAccount: gql`
    query workspaceServiceAccount($serviceAccountUuid: Uuid!) {
      workspaceServiceAccount(serviceAccountUuid: $serviceAccountUuid) {
        ...serviceAccount
      }
    }
    ${serviceAccount}
  `,
  CreateDeploymentServiceAccount: gql`
    mutation createDeploymentServiceAccount(
      $deploymentUuid: Uuid!
      $category: String
      $label: String!
      $role: Role!
    ) {
      createDeploymentServiceAccount(
        deploymentUuid: $deploymentUuid
        category: $category
        label: $label
        role: $role
      ) {
        ...serviceAccount
      }
    }
    ${serviceAccount}
  `,
  CreateWorkspaceServiceAccount: gql`
    mutation createWorkspaceServiceAccount(
      $workspaceUuid: Uuid!
      $category: String
      $label: String!
      $role: Role!
    ) {
      createWorkspaceServiceAccount(
        workspaceUuid: $workspaceUuid
        category: $category
        label: $label
        role: $role
      ) {
        ...serviceAccount
      }
    }
    ${serviceAccount}
  `,
  UpdateDeploymentServiceAccount: gql`
    mutation updateDeploymentServiceAccount(
      $serviceAccountUuid: Uuid!
      $deploymentUuid: Uuid!
      $payload: JSON!
    ) {
      updateDeploymentServiceAccount(
        serviceAccountUuid: $serviceAccountUuid
        deploymentUuid: $deploymentUuid
        payload: $payload
      ) {
        ...serviceAccount
      }
    }
    ${serviceAccount}
  `,
  UpdateWorkspaceServiceAccount: gql`
    mutation updateWorkspaceServiceAccount(
      $serviceAccountUuid: Uuid!
      $workspaceUuid: Uuid!
      $payload: JSON!
    ) {
      updateWorkspaceServiceAccount(
        serviceAccountUuid: $serviceAccountUuid
        workspaceUuid: $workspaceUuid
        payload: $payload
      ) {
        ...serviceAccount
      }
    }
    ${serviceAccount}
  `,
  DeleteDeploymentServiceAccount: gql`
    mutation deleteDeploymentServiceAccount(
      $serviceAccountUuid: Uuid!
      $deploymentUuid: Uuid!
    ) {
      updateDeploymentServiceAccount(
        serviceAccountUuid: $serviceAccountUuid
        deploymentUuid: $deploymentUuid
      ) {
        id
      }
    }
  `,
  DeleteWorkspaceServiceAccount: gql`
    mutation deleteWorkspaceServiceAccount(
      $serviceAccountUuid: Uuid!
      $workspaceUuid: Uuid!
    ) {
      deleteWorkspaceServiceAccount(
        serviceAccountUuid: $serviceAccountUuid
        workspaceUuid: $workspaceUuid
      ) {
        id
      }
    }
  `,
}
