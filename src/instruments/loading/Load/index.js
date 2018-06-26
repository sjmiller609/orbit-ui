//import React from 'react'
import Loadable from 'react-loadable'
import Handler from './Handler'

const Load = loader => {
  if (!loader) return
  return Loadable(
    Object.assign({
      loader,
      loading: Handler,
      timeout: 10000,
      delay: 200,
    })
  )
}

export default Load
