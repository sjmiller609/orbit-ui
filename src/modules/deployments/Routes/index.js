import Main from '../Main'
import New from '../New'

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
]
