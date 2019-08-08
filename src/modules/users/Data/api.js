import gql from 'graphql-tag'
import { user, group, invite, workspace } from 'modules/api/fragments'

export default {
  User: gql`
    query workspaceUser($workspaceId: Uuid!, $username: String!) {
      workspaceUser(workspaceUuid: $workspaceId, username: $username) {
        ...user
      }
    }
    ${user}
  `,
  Invites: gql`
    query workspaceInvites($workspaceId: Uuid!, $email: String) {
      workspaceInvites(workspaceUuid: $workspaceId, email: $email) {
        ...invite
      }
    }
    ${invite}
  `,
  InviteWorkspaceUser: gql`
    mutation workspaceAddUser($email: String!, $workspaceId: Uuid!) {
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
  InviteUser: gql`
    mutation inviteUser($email: String!) {
      inviteUser(email: $email)
    }
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
  UpdateRole: gql`
    mutation workspaceUpdateUserRole(
      $workspaceId: Uuid!
      $email: String!
      $role: Role!
    ) {
      workspaceUpdateUserRole(
        workspaceUuid: $workspaceId
        email: $email
        role: $role
      )
    }
  `,
}
