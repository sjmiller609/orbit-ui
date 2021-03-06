import gql from 'graphql-tag'
import {
  workspace,
  user,
  invite,
  entityRoleBinding,
  card,
} from 'modules/api/fragments'

export default {
  Workspaces: gql`
    query workspaces($withUsers: Boolean!) {
      workspaces {
        ...workspace
        users @include(if: $withUsers) {
          ...user
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
    ${invite}
    ${entityRoleBinding}
  `,
  CreateWorkspace: gql`
    mutation createWorkspace($label: String!, $description: String) {
      createWorkspace(label: $label, description: $description) {
        ...workspace
      }
    }
    ${workspace}
  `,
  UpdateWorkspace: gql`
    mutation updateWorkspace($id: Uuid!, $payload: JSON!) {
      updateWorkspace(workspaceUuid: $id, payload: $payload) {
        ...workspace
      }
    }
    ${workspace}
  `,
  DeleteWorkspace: gql`
    mutation deleteWorkspace($id: Uuid!) {
      deleteWorkspace(workspaceUuid: $id) {
        id: uuid
      }
    }
  `,
  AddCard: gql`
    mutation addCard(
      $id: Uuid!
      $billingEmail: String!
      $company: String
      $token: String!
    ) {
      addCard(
        workspaceUuid: $id
        billingEmail: $billingEmail
        company: $company
        token: $token
      ) {
        ...card
      }
    }
    ${card}
  `,
  UpdateCard: gql`
    mutation updateCard(
      $id: Uuid!
      $billingEmail: String!
      $company: String
      $token: String!
    ) {
      updateCard(
        workspaceUuid: $id
        billingEmail: $billingEmail
        company: $company
        token: $token
      ) {
        ...card
      }
    }
    ${card}
  `,
  Card: gql`
    query card($id: Uuid!, $stripeCustomerId: String!) {
      card(workspaceUuid: $id, stripeCustomerId: $stripeCustomerId) {
        ...card
      }
    }
    ${card}
  `,
}
