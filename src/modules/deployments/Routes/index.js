import { Load } from 'instruments'

export default [
  {
    path: '/deployments',
    component: Load(() => import(/* webpackPrefetch: true */ '../Deployments')),
    exact: true,
  },
  {
    path: '/deployments/new',
    component: Load(() => import(/* webpackPrefetch: true */ '../New')),
    exact: true,
  },
  {
    path: '/deployments/:id',
    component: Load(() => import(/* webpackPrefetch: true */ '../Deployment')),
    // matches sub routes in Deployment
  },
]
