import Teams from '../Teams'
import New from '../New'
import SetTeam from '../SetTeam'

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
    component: SetTeam,
  },
]

export const team = [
  {
    path: '/settings',
    component: Settings,
    exact: true,
  },
]
