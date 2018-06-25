//import React from 'react'
import { asyncComponent } from 'react-async-component'
import { Loading, CardError } from 'instruments'

const Load = path => {
  if (!path) return
  return asyncComponent({
    // resolve: () => import(`${path}`),
    resolve: () => import('modules/app/NoMatch'),
    LoadingComponent: Loading,
    ErrorComponent: CardError,
  })
}

export default Load
