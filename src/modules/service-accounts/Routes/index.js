import { Load } from 'instruments'

export default [
  {
    path: '/service-accounts',
    component: Load(() =>
      import(/* webpackPrefetch: true */ '../ServiceAccounts')
    ),
    exact: true,
  },
  {
    path: '/service-accounts/new',
    component: Load(() => import(/* webpackPrefetch: true */ '../New')),
    exact: true,
  },
  {
    path: '/service-accounts/:id',
    component: Load(() => import(/* webpackPrefetch: true */ '../User')),
    // matches sub routes
  },
]
