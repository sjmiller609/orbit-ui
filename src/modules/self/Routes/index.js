import { Load } from 'instruments'

export default [
  {
    path: '/profile',
    component: Load(() => import(/* webpackPrefetch: true */ '../Settings')),
    exact: true,
  },
]
