import gql from 'graphql-tag'
// import { permissions } from './permissions'

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
    roleBindings {
      role
      workspace {
        id
      }
    }
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
    createdAt
    updatedAt
    deploymentCount
    stripeCustomerId
    workspaceCapabilities {
      canUpdateBilling
      canUpdateIAM
    }
    trialEndsAt
    billingEnabled
    paywallEnabled
  }
`

export const card = gql`
  fragment card on Card {
    name
    expMonth
    expYear
    last4
    brand
    billingEmail
    company
  }
`

export const deployment = gql`
  fragment deployment on Deployment {
    id: uuid
    label
    description
    type
    releaseName
    version
    airflowVersion
    workspace {
      id: uuid
      stripeCustomerId
    }
    urls {
      type
      url
    }
    createdAt
    updatedAt
    config
    env
    properties
  }
`
export const invite = gql`
  fragment invite on Invite {
    id: uuid
    email
    role
    createdAt
    updatedAt
  }
`

export const workspaceUsers = gql`
  fragment workspaceUsers on Workspace {
    id: uuid
    users {
      ...user
    }
    groups {
      ...group
    }
    invites {
      ...invite
    }
  }
  ${invite}
  ${user}
  ${group}
`

export const token = gql`
  fragment token on Token {
    value
  }
`

export const authUser = gql`
  fragment authUser on AuthUser {
    user {
      ...user
    }
    token {
      ...token
    }
    # isAdmin
  }
  ${token}
  ${user}
`

export const deploymentConfig = gql`
  fragment deploymentConfig on DeploymentConfig {
    defaults
    limits
    astroUnit {
      cpu
      memory
      pods
      airflowConns
      actualConns
      price
    }
    maxExtraAu
    executors
    latestVersion
    singleNamespace
    loggingEnabled
  }
`

export const entityRoleBinding = gql`
  fragment entityRoleBinding on RoleBinding {
    role
    user {
      id
    }
    serviceAccount {
      id
    }
  }
`

export const serviceAccount = gql`
  fragment serviceAccount on ServiceAccount {
    id: uuid
    label
    apiKey
    entityType
    entityId: entityUuid
    category
    active
    lastUsedAt
    createdAt
    updatedAt
    roleBinding {
      role
    }
  }
`
