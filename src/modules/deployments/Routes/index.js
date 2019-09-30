import { Load } from 'instruments'

export default [
  {
    path: '/workspaces/:workspaceId/deployments',
    component: Load(() => import(/* webpackPrefetch: true */ '../Deployments')),
    exact: true,
  },
  {
    path: '/workspaces/:workspaceId/deployments/new',
    component: Load(() => import(/* webpackPrefetch: true */ '../New')),
    exact: true,
  },
  {
    path: '/workspaces/:workspaceId/deployments/:id',
    component: Load(() => import(/* webpackPrefetch: true */ '../Deployment')),
    // matches sub routes in Deployment
  },
]
