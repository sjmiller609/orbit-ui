import { Load } from 'instruments'

// will redirect if logged in
export default [
  {
    path: '/(|signup)',
    component: Load(() => import('../Signup')),
    exact: true,
  },
  {
    path: '/login',
    component: Load(() => import('../Login')),
    exact: true,
  },
  {
    path: '/confirm',
    component: Load(() => import('../Confirm')),
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
    path: '/token',
    component: Load(() => import('../OauthSuccess/Token')),
    exact: true,
  },
  {
    path: '/forgot-password',
    component: Load(() => import('../ForgotPw')),
  },
  {
    path: '/reset-password',
    component: Load(() => import('../ResetPw')),
  },
  {
    path: '/logout',
    component: Load(() => import('../Logout')),
  },
]
