import { Load } from 'instruments'

export default [
  {
    path: '/workspaces',
    component: Load(() => import('../Workspaces')),
    exact: true,
  },
  {
    path: '/workspaces/new',
    component: Load(() => import('../New')),
    exact: true,
  },
  {
    path: '/workspaces/:id',
    component: Load(() => import('../SetWorkspace')),
  },
]

export const workspace = [
  {
    path: '/settings',
    component: Load(() => import('../Settings')),
    exact: true,
  },
]
