import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { hot } from 'react-hot-loader'
import Routes from '../Routes'
import UI from '../UI'
import { ProviderUI } from '../../../instruments'

const Root = () => {
  return (
    <ProviderUI>
      <BrowserRouter>
        <React.Fragment>
          <Routes />
          <UI />
        </React.Fragment>
      </BrowserRouter>
    </ProviderUI>
  )
}

export default hot(module)(Root)
