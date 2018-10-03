import { Load } from 'instruments'

export default [
  {
    path: '/users',
    component: Load(() => import(/* webpackPrefetch: true */ '../Users')),
    exact: true,
  },
  {
    path: '/users/new',
    component: Load(() => import(/* webpackPrefetch: true */ '../New')),
    exact: true,
  },
  {
    path: '/users/:id',
    component: Load(() => import(/* webpackPrefetch: true */ '../User')),
    // matches sub routes
  },
  {
    path: '/pending/:id',
    component: Load(() => import(/* webpackPrefetch: true */ '../Pending')),
    // matches sub routes
  },
]
