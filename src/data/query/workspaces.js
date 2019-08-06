import gql from 'graphql-tag';
import {
  workspace,
  user,
  group,
  invite,
  entityRoleBinding,
  card,
} from '../fragments';

export const workspaces = gql`
  query workspaces($workspaceId: Uuid, $userId: Uuid, $withUsers: Boolean!) {
    workspaces(workspaceUuid: $workspaceId, userUuid: $userId) {
      ...workspace
      users @include(if: $withUsers) {
        ...user
      }
      groups @include(if: $withUsers) {
        ...group
      }
      invites @include(if: $withUsers) {
        ...invite
      }
      roleBindings @include(if: $withUsers) {
        ...entityRoleBinding
      }
    }
  }
  ${workspace}
  ${user}
  ${group}
  ${invite}
  ${entityRoleBinding}
`;
