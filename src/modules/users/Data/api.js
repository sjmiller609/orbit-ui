import gql from 'graphql-tag'
import { user, group, team } from 'modules/api/fragments'

export default {
  Users: gql`
    query users($userId: Uuid) {
      users(userUuid: $userId) {
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
  // UpdateDeployment: gql`
  //   mutation updateDeployment($id: Uuid!, $label: String) {
  //     updateDeployment(deploymentUuid: $id, label: $label) {
  //       ...deployment
  //     }
  //   }
  //   ${deployment}
  // `,
  // DeleteDeployment: gql`
  //   mutation deleteDeployment($id: Uuid!) {
  //     deleteDeployment(deploymentUuid: $id) {
  //       id: uuid
  //     }
  //   }
  // `,
}
