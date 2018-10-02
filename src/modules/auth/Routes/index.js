import { Load } from 'instruments'

// will redirect if logged in
export default [
  {
    path: '/(|signup|auth)',
    component: Load(() => import(/* webpackPrefetch: true */ '../Signup')),
    exact: true,
  },
  {
    path: '/login',
    component: Load(() => import(/* webpackPrefetch: true */ '../Login')),
    exact: true,
  },
  {
    path: '/confirm',
    component: Load(() => import(/* webpackPrefetch: true */ '../Confirm')),
    exact: true,
  },
  {
    path: '/reset-password',
    component: Load(() => import(/* webpackPrefetch: true */ '../ResetPw')),
    exact: true,
  },
  {
    path: '/verify',
    component: Load(() => import(/* webpackPrefetch: true */ '../Verify')),
    exact: true,
  },
]

export const otherAuthRoutes = [
  {
    path: '/oauth',
    component: Load(() =>
      import(/* webpackPrefetch: true */ '../OauthSuccess')
    ),
    exact: true,
  },
  {
    path: '/token',
    component: Load(() =>
      import(/* webpackPrefetch: true */ '../OauthSuccess/Token')
    ),
    exact: true,
  },
  {
    path: '/forgot-password',
    component: Load(() => import(/* webpackPrefetch: true */ '../ForgotPw')),
    exact: true,
  },
  {
    path: '/forgot-password/sent',
    component: Load(() =>
      import(/* webpackPrefetch: true */ '../ForgotPw/Sent')
    ),
    exact: true,
  },
  {
    path: '/resend',
    component: Load(() => import(/* webpackPrefetch: true */ '../Resend')),
    exact: true,
  },

  {
    path: '/logout',
    component: Load(() => import(/* webpackPrefetch: true */ '../Logout')),
  },
]
