import { Load } from 'instruments'

export default [
  {
    path: '/profile',
    component: Load(() => import('../Settings')),
    exact: true,
  },
]
