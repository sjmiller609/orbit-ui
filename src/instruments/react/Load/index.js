//import React from 'react'
import Async from 'react-imported-component'
//import Handler from './Handler'
import { Loading, ErrorPage } from 'instruments'

const Load = component => {
  if (!component) return
  return Async(
    Object.assign(component, {
      LoadingComponent: Loading,
      ErrorComponent: ErrorPage,
      timeout: 10000,
      delay: 200,
    })
  )
}

export default Load
