import { Load } from 'instruments'

export default [
  {
    path: '/workspaces',
    component: Load(() => import('../Workspaces').then(c => c.default)),
    exact: true,
  },
  {
    path: '/workspaces/new',
    component: Load(() => import('../New').then(c => c.default)),
    exact: true,
  },
  {
    path: '/workspaces/:id',
    component: Load(() => import('../SetWorkspace').then(c => c.default)),
  },
]

export const workspace = [
  {
    path: '/settings',
    component: Load(() => import('../Settings').then(c => c.default)),
    exact: true,
  },
]
