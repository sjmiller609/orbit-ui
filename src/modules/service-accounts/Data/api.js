import gql from 'graphql-tag'
import { serviceAccount } from 'modules/api/fragments'

export default {
  ServiceAccounts: gql`
    query serviceAccounts(
      $serviceAccountUuid: Uuid
      $entityType: EntityType!
      $entityUuid: Uuid
    ) {
      serviceAccounts(
        serviceAccountUuid: $serviceAccountUuid
        entityType: $entityType
        entityUuid: $entityUuid
      ) {
        ...serviceAccount
      }
    }
    ${serviceAccount}
  `,
  CreateServiceAccount: gql`
    mutation createServiceAccount(
      $label: String!
      $category: String
      $entityType: EntityType!
      $entityId: Uuid
      $role: Role!
    ) {
      createServiceAccount(
        label: $label
        category: $category
        entityType: $entityType
        entityUuid: $entityId
        role: $role
      ) {
        ...serviceAccount
      }
    }
    ${serviceAccount}
  `,
  UpdateServiceAccount: gql`
    mutation updateServiceAccount($serviceAccountId: Uuid!, $payload: JSON!) {
      updateServiceAccount(
        serviceAccountUuid: $serviceAccountId
        payload: $payload
      ) {
        ...serviceAccount
      }
    }
    ${serviceAccount}
  `,
  DeleteServiceAccount: gql`
    mutation deleteServiceAccount($serviceAccountId: Uuid!) {
      deleteServiceAccount(serviceAccountUuid: $serviceAccountId) {
        id: uuid
      }
    }
  `,
}
