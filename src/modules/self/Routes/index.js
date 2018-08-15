import { Load } from 'instruments'

export default [
  {
    path: '/profile',
    component: Load(() => import('../Settings').then(c => c.default)),
    exact: true,
  },
]
