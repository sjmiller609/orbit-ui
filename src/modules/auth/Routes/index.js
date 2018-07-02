import { Load } from 'instruments'

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
  {
    path: '/oauth/:service',
    component: Load(() => import('../OauthSuccess')),
    exact: true,
  },
]
