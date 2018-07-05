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

export const deployment = gql`
  fragment deployment on Deployment {
    id: uuid
    label
    type
    releaseName
    version
    team {
      id: uuid
    }
    createdAt
    updatedAt
  }
`
