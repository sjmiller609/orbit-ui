import { Load } from 'instruments'

export default [
  {
    path: '/(|signup|login)',
    component: Load(() => import('../Signup')),
    exact: true,
  },
]
