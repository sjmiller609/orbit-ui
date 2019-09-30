import { Load } from 'instruments'

export default [
  {
    path: '/workspaces',
    component: Load(() => import(/* webpackPrefetch: true */ '../Workspaces')),
    exact: true,
  },
  {
    path: '/workspaces/new',
    component: Load(() => import(/* webpackPrefetch: true */ '../New')),
    exact: true,
  },
  {
    path: '/workspaces/:workspaceId',
    component: Load(() =>
      import(/* webpackPrefetch: true */ '../SetWorkspace')
    ),
  },
]

export const workspace = [
  {
    path: '/workspaces/:workspaceId/settings',
    component: Load(() => import(/* webpackPrefetch: true */ '../Settings')),
  },
  {
    path: '/workspaces/:workspaceId/billing',
    component: Load(() => import(/* webpackPrefetch: true */ '../Billing')),
  },
  {
    path: '/workspaces/:workspaceId/users',
    component: Load(() =>
      import(/* webpackPrefetch: true */ '../../users/Users')
    ),
  },
]
