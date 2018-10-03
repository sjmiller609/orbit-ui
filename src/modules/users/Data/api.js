import gql from 'graphql-tag'
import { user, group, invite, workspace } from 'modules/api/fragments'

export default {
  Users: gql`
    query users($userId: Uuid, $username: String, $email: String) {
      users(userUuid: $userId, username: $username, email: $email) {
        ...user
      }
    }
    ${user}
  `,
  Invites: gql`
    query invites($workspaceId: Uuid, $email: String) {
      invites(workspaceUuid: $workspaceId, email: $email) {
        ...invite
      }
    }
    ${invite}
  `,
  InviteUser: gql`
    mutation inviteUser($email: String!, $workspaceId: Uuid!) {
      workspaceAddUser(workspaceUuid: $workspaceId, email: $email) {
        ...workspace
        users {
          ...user
        }
        groups {
          ...group
        }
        invites {
          ...invite
        }
      }
    }
    ${workspace}
    ${user}
    ${group}
    ${invite}
  `,
  UpdateUser: gql`
    mutation updateUser($id: Uuid!, $payload: JSON) {
      updateUser(userId: $id, payload: $payload) {
        ...user
      }
    }
    ${user}
  `,
  RemoveUser: gql`
    mutation removeUser($id: Uuid!, $workspaceId: Uuid!) {
      workspaceRemoveUser(userUuid: $id, workspaceUuid: $workspaceId) {
        id: uuid
      }
    }
  `,
  DeleteInvite: gql`
    mutation deleteInviteToken($id: Uuid) {
      deleteInviteToken(inviteUuid: $id) {
        id: uuid
      }
    }
  `,
}
