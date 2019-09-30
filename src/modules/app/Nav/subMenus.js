const subMenus = workspaceId => ({
  admin: [
    {
      to: '/admin',
      text: 'Users',
    },
    {
      to: '/admin/deployments',
      text: 'Deployments',
    },
  ],
  workspaces: [
    {
      to: '/workspaces',
      text: 'Workspaces',
    },
    {
      to: '/profile',
      text: 'Personal Settings',
    },
  ],
  workspace: [
    {
      to: `/workspaces/${workspaceId}/deployments`,
      text: 'Deployments',
    },
    {
      to: `/workspaces/${workspaceId}/users`,
      text: 'Users',
    },
    {
      to: `/service-accounts`,
      text: 'Service Accounts',
      exact: true,
    },
    {
      to: `/workspaces/${workspaceId}/settings`,
      text: 'Workspace Settings',
    },
    {
      to: `/workspaces/${workspaceId}/billing`,
      text: 'Billing',
    },
  ],
  user: [
    {
      to: '/users',
      text: 'Users',
      back: true,
    },
  ],
})

export default subMenus
