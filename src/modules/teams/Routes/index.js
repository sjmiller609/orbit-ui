import Deployments from '../Deployments'
import New from '../New'
import Deployment from '../Deployment'

export default [
  {
    path: '/deployments',
    component: Deployments,
    exact: true,
  },
  {
    path: '/deployments/new',
    component: New,
    exact: true,
  },
  {
    path: '/deployments/:id',
    component: Deployment,
  },
]
