import Teams from '../Teams'
import New from '../New'
import Team from '../Team'

import Settings from '../Settings'

export default [
  {
    path: '/teams',
    component: Teams,
    exact: true,
  },
  {
    path: '/teams/new',
    component: New,
    exact: true,
  },
  {
    path: '/teams/:id',
    component: Team,
  },
]

export const team = [
  {
    path: '/settings',
    component: Settings,
    exact: true,
  },
]
