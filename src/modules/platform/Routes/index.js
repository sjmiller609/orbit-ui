import { Load } from 'instruments'

export default [
  {
    path: '/platform',
    component: Load(() => import(/* webpackPrefetch: true */ '../Settings')),
    exact: true,
    permissions: {
      isAdmin: true,
    },
  },
]
