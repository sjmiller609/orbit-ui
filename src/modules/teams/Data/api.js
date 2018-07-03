import gql from 'graphql-tag'

import { user, group } from 'modules/users/Data/api'

export const team = gql`
  fragment team on Team {
    id: uuid
    label
    description
    active
    createdAt
    updatedAt
  }
`

export default {
  Teams: gql`
    query teams($teamId: Uuid, $userId: Uuid, $withUsers: Boolean!) {
      teams(teamUuid: $teamId, userUuid: $userId) {
        ...team
        users @include(if: $withUsers) {
          ...user
        }
        groups @include(if: $withUsers) {
          ...group
        }
      }
    }
    ${team}
    ${user}
    ${group}
  `,
  CreateTeam: gql`
    mutation createTeam($label: String!, $description: String) {
      createTeam(label: $label, description: $description) {
        ...team
      }
    }
    ${team}
  `,
  UpdateTeam: gql`
    mutation updateTeam($id: Uuid!, $payload: JSON!) {
      updateTeam(teamUuid: $id, payload: $payload) {
        ...team
      }
    }
    ${team}
  `,
  DeleteTeam: gql`
    mutation deleteTeam($id: Uuid!) {
      deleteTeam(teamUuid: $id) {
        id: uuid
      }
    }
  `,
}
