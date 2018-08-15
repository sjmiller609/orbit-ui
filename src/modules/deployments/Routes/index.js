import { Load } from 'instruments'

export default [
  {
    path: '/deployments',
    component: Load(() => import('../Deployments').then(c => c.default)),
    exact: true,
  },
  {
    path: '/deployments/new',
    component: Load(() => import('../New').then(c => c.default)),
    exact: true,
  },
  {
    path: '/deployments/:id',
    component: Load(() => import('../Deployment').then(c => c.default)),
    // matches sub routes in Deployment
  },
]
