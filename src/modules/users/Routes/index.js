import { Load } from 'instruments'

export default [
  {
    path: '/users',
    component: Load(() => import('../Users')),
    exact: true,
  },
  {
    path: '/users/new',
    component: Load(() => import('../New')),
    exact: true,
  },
  {
    path: '/users/:id',
    component: Load(() => import('../User')),
    // matches sub routes in Deployment
  },
]
