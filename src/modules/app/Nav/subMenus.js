const subMenus = {
  workspaces: [
    {
      to: '/workspaces',
      text: 'Workspaces',
    },
    {
      to: '/platform',
      text: 'Platform Settings',
      isAdmin: true,
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
