import gql from 'graphql-tag'
import { deployment } from '../fragments'

export const deployments = gql`
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
`;
