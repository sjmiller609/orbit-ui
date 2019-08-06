export const admin = [
  {
    name: 'Workspaces',
    to: '/workspaces',
  },
  {
    name: 'New Workspace',
    to: '/w/new',
  }
]

export const self = id => [
  {
    name: 'Personal Settings',
    to: `/u/${id}`,
  },
  {
    name: 'Logout',
    to: '/logout',
  }
]

export const workspaces = [
  {
    name: 'Workspaces',
    to: '/workspaces',
  },
  {
    name: 'New Workspace',
    to: '/workspaces/new',
  }
]

export const workspace = id => [
  {
    name: 'Deployments',
    to: `/w/${id}`
  },
  {
    name: 'Settings',
    to: `/w/${id}/config`
  },
  {
    name: 'Billing',
    to: `/w/${id}/billing`
  },
  {
    name: 'Service Accounts',
    to: `/w/${id}/service-accounts`
  },
  {
    name: 'Users',
    to: `/w/${id}/users`
  },
]

export const deployment = (wId, id) => [
  {
    name: 'Overview',
    to: `/w/${wId}/d/${id}`
  },
  {
    name: 'Settings',
    to: `/w/${wId}/d/${id}/config`
  },
  {
    name: 'Metrics',
    to: `/w/${wId}/d/${id}/metrics`
  },
  {
    name: 'Logs',
    to: `/w/${wId}/d/${id}/logs`
  },
  {
    name: 'Alerts',
    to: `/w/${wId}/d/${id}/alerts`
  },
  {
    name: 'Service Accounts',
    to: `/w/${wId}/d/${id}/service-accounts`
  },
]

export const serviceAccounts = []

export const serviceAccount = []

export const users = []

export const user = []
