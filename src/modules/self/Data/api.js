import gql from 'graphql-tag'
import { user } from 'modules/users/Data/api'

export default {
  Self: gql`
    query self {
      self {
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
