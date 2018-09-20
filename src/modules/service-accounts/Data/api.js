import gql from 'graphql-tag'
import { serviceAccount } from 'modules/api/fragments'

export default {
  ServiceAccounts: gql`
    query serviceAccounts(
      $serviceAccountId: Uuid
      $entityType: EntityType!
      $entityId: Uuid
    ) {
      serviceAccounts(
        serviceAccountUuid: $serviceAccountId
        entityType: $entityType
        entityUuid: $entityId
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
    ) {
      createServiceAccount(
        label: $label
        category: $category
        entityType: $entityType
        entityUuid: $entityId
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
