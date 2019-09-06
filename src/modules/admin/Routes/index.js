import { Load } from 'instruments'

export default [
  {
    path: '/admin',
    component: Load(() => import(/* webpackPrefetch: true */ '../Users')),
    exact: true,
  },
  {
    path: '/admin/deployments',
    component: Load(() => import(/* webpackPrefetch: true */ '../Deployments')),
    exact: true,
  },
  {
    path: '/admin/users',
    component: Load(() => import(/* webpackPrefetch: true */ '../Users')),
    exact: true,
  },
  {
    path: '/admin/users/new',
    component: Load(() =>
      import(/* webpackPrefetch: true */ '../../users/New')
    ),
    exact: true,
  },
  {
    path: '/admin/users/:id',
    component: Load(() => import(/* webpackPrefetch: true */ '../Users/User')),
    exact: true,
  },
  {
    path: '/admin/users/:id/configure',
    component: Load(() =>
      import(/* webpackPrefetch: true */ '../Users/Configure')
    ),
    exact: true,
  },
  {
    path: '/admin/pending/:id',
    component: Load(() =>
      import(/* webpackPrefetch: true */ '../Users/Pending')
    ),
    exact: true,
  },
  {
    path: '/admin/pending/:id/configure',
    component: Load(() =>
      import(/* webpackPrefetch: true */ '../Users/Configure')
    ),
    exact: true,
  },
]
