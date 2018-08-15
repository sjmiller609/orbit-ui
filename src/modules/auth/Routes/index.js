import { Load } from 'instruments'

// will redirect if logged in
export default [
  {
    path: '/(|signup)',
    component: Load(() => import('../Signup').then(c => c.default)),
    exact: true,
  },
  {
    path: '/login',
    component: Load(() => import('../Login').then(c => c.default)),
    exact: true,
  },
  {
    path: '/confirm',
    component: Load(() => import('../Confirm').then(c => c.default)),
    exact: true,
  },
  {
    path: '/reset-password',
    component: Load(() => import('../ResetPw').then(c => c.default)),
    exact: true,
  },
  {
    path: '/verify',
    component: Load(() => import('../Verify').then(c => c.default)),
    exact: true,
  },
]

export const otherAuthRoutes = [
  {
    path: '/oauth',
    component: Load(() => import('../OauthSuccess').then(c => c.default)),
    exact: true,
  },
  {
    path: '/token',
    component: Load(() => import('../OauthSuccess/Token').then(c => c.default)),
    exact: true,
  },
  {
    path: '/forgot-password',
    component: Load(() => import('../ForgotPw').then(c => c.default)),
    exact: true,
  },
  {
    path: '/forgot-password/sent',
    component: Load(() => import('../ForgotPw/Sent').then(c => c.default)),
    exact: true,
  },
  {
    path: '/resend',
    component: Load(() => import('../Resend').then(c => c.default)),
    exact: true,
  },

  {
    path: '/logout',
    component: Load(() => import('../Logout').then(c => c.default)),
  },
]
