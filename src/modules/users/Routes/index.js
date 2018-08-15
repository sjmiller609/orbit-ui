import { Load } from 'instruments'

export default [
  {
    path: '/users',
    component: Load(() => import('../Users').then(c => c.default)),
    exact: true,
  },
  {
    path: '/users/new',
    component: Load(() => import('../New').then(c => c.default)),
    exact: true,
  },
  {
    path: '/users/:id',
    component: Load(() => import('../User').then(c => c.default)),
    // matches sub routes
  },
]
