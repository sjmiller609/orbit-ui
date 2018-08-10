import { Load } from 'instruments'

// will redirect if logged in
export default [
  {
    path: '/(|signup)',
    component: Load(() => import('../Signup')),
    exact: true,
  },
  {
    path: '/(login)',
    component: Load(() => import('../Login')),
    exact: true,
  },
]

export const otherAuthRoutes = [
  {
    path: '/oauth',
    component: Load(() => import('../OauthSuccess')),
    exact: true,
  },
  {
    path: '/logout',
    component: Load(() => import('../Logout')),
  },
]
