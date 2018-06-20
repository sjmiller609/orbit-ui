import gql from 'graphql-tag'

const team = gql`
  fragment team on Team {
    id: uuid
    label
    description
    active
    created_at
    updated_at
  }
`

export default {
  Teams: gql`
    query teams($teamId: Uuid, $userId: Uuid) {
      teams(teamUuid: $teamId, userUuid: $userId) {
        ...team
      }
    }
    ${team}
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
        id
      }
    }
  `,
}
