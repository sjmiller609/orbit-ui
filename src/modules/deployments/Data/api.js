import gql from 'graphql-tag';

export default {
  FindUserOrgs: gql`
    query findUserOrgs($userId: String!) {
      organizations(userId: $userId) {
        id
        name
        plan
        memberCount
      }
    }
  `,
  CreateOrg: gql`
    mutation createOrganization($userId: String!, $name: String!) {
      response: createOrganization(name:$name, userId:$userId) {
        success
        message
        id
      }
    }
  `,
};
