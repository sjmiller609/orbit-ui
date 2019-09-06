import gql from 'graphql-tag';
import { workspace } from '../fragments';

export const createWorkspace = gql`
  mutation createWorkspace($label: String!, $description: String) {
    createWorkspace(label: $label, description: $description) {
      ...workspace
    }
  }
  ${workspace}
`;
