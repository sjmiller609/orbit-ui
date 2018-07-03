import gql from 'graphql-tag'

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
  // CreateDeployment: gql`
  //   mutation createDeployment(
  //     $type: String!
  //     $label: String!
  //     $teamId: Uuid
  //     $version: String
  //   ) {
  //     createDeployment(
  //       teamUuid: $teamId
  //       type: $type
  //       label: $label
  //       version: $version
  //     ) {
  //       ...deployment
  //     }
  //   }
  //   ${deployment}
  // `,
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
