const subMenus = {
  admin: [
    {
      to: '/admin',
      text: 'Manage Users',
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
      to: '/deployments',
      text: 'Deployments',
    },
    {
      to: '/users',
      text: 'Users',
    },
    {
      to: '/service-accounts',
      text: 'Service Accounts',
      exact: false,
    },
    {
      to: '/settings',
      text: 'Workspace Settings',
    },
    {
      to: '/billing',
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
}

export default subMenus
