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
    path: '/workspaces/:id',
    component: Load(() =>
      import(/* webpackPrefetch: true */ '../SetWorkspace')
    ),
  },
]

export const workspace = [
  {
    path: '/settings',
    component: Load(() => import(/* webpackPrefetch: true */ '../Settings')),
    exact: true,
  },
  {
    path: '/billing',
    component: Load(() => import(/* webpackPrefetch: true */ '../Billing')),
    exact: true,
  },
]
