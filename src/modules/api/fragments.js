import gql from 'graphql-tag'

export const user = gql`
  fragment user on User {
    id: uuid
    emails {
      address
      verified
      primary
    }
    fullName
    profile {
      key
      value
      category
    }
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

export const workspace = gql`
  fragment workspace on Workspace {
    id: uuid
    label
    description
    active
    createdAt
    updatedAt
  }
`

export const deployment = gql`
  fragment deployment on Deployment {
    id: uuid
    label
    type
    releaseName
    version
    workspace {
      id: uuid
    }
    urls {
      type
      url
    }
    createdAt
    updatedAt
  }
`
