import { Load } from 'instruments'

export default [
  {
    path: '/deployments',
    component: Load(() => import('../Deployments')),
    exact: true,
  },
  {
    path: '/deployments/new',
    component: Load(() => import('../New')),
    exact: true,
  },
  {
    path: '/deployments/:id',
    component: Load(() => import('../Deployment')),
    // matches sub routes in Deployment
  },
]
