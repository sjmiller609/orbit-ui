import Main from '../Main'
import New from '../New'
import Deployment from '../Deployment'

export default [
  {
    path: '/deployments',
    component: Main,
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
