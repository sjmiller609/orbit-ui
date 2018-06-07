import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { hot } from 'react-hot-loader'
import Routes from '../Routes'
import UI from '../UI'
import { ProviderUI } from '../../../instruments'

const Root = () => {
  return (
    <BrowserRouter>
      <ProviderUI>
        <React.Fragment>
          <Routes />
          <UI />
        </React.Fragment>
      </ProviderUI>
    </BrowserRouter>
  )
}

export default hot(module)(Root)
