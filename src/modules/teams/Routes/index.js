import Teams from '../Teams'
import New from '../New'
import Team from '../Team'

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
