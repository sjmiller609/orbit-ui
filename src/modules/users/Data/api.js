import gql from 'graphql-tag'
import { user, group, team } from 'modules/api/fragments'

export default {
  Users: gql`
    query users($userId: Uuid, $username: String, $email: String) {
      users(userUuid: $userId, username: $username, email: $email) {
        ...user
      }
    }
    ${user}
  `,
  InviteUser: gql`
    mutation inviteUser($email: String!, $teamId: Uuid!) {
      teamAddUser(teamUuid: $teamId, email: $email) {
        ...team
        users {
          ...user
        }
        groups {
          ...group
        }
      }
    }
    ${team}
    ${user}
    ${group}
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
    mutation removeUser($id: Uuid!, $teamId: Uuid!) {
      deleteDeployment(userUuid: $id, teamUuid: $teamId) {
        id: uuid
      }
    }
  `,
}
