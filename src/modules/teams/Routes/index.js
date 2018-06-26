import { Load } from 'instruments'

export default [
  {
    path: '/teams',
    component: Load(() => import('../Teams')),
    exact: true,
  },
  {
    path: '/teams/new',
    component: Load(() => import('../New')),
    exact: true,
  },
  {
    path: '/teams/:id',
    component: Load(() => import('../SetTeam')),
  },
]

export const team = [
  {
    path: '/settings',
    component: Load(() => import('../Settings')),
    exact: true,
  },
]
