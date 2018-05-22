import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { hot } from 'react-hot-loader'
import Routes from '../Routes'

const Root = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}

export default hot(module)(Root)
