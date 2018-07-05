import gql from 'graphql-tag'
import { team } from 'modules/users/Data/api'

export const user = gql`
  fragment user on User {
    id: uuid
    emails {
      address
      verified
      primary
    }
    profile
    username
    status
    createdAt
    updatedAt
  }
`

export const group = gql`
  fragment group on Group {
    id: uuid
    label
    description
    custom
    active
    createdAt
    updatedAt
  }
`

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
