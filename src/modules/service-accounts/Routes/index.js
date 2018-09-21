import { Load } from 'instruments'

// the rest of the routes are handled in this component, because service accounts can be attached deployments as well as workspaces
export default [
  {
    path: '/service-accounts',
    component: Load(() =>
      import(/* webpackPrefetch: true */ '../ServiceAccounts')
    ),
  },
]
