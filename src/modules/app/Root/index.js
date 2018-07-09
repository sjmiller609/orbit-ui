import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { hot } from 'react-hot-loader'
import Routes from '../Routes'
import UI from '../UI'
import { ProviderUI, ProviderData } from 'instruments'
import ErrorBoundary from '../ErrorBoundary'
// Load into #root
const Root = () => {
  return (
    <ProviderData>
      <ProviderUI>
        <BrowserRouter>
          <ErrorBoundary>
            <React.Fragment>
              <Routes />
              <UI />
            </React.Fragment>
          </ErrorBoundary>
        </BrowserRouter>
      </ProviderUI>
    </ProviderData>
  )
}

export default hot(module)(Root)
