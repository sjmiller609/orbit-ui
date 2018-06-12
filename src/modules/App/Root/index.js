import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { hot } from 'react-hot-loader'
import Routes from '../Routes'
import UI from '../UI'
import { ProviderUI } from '../../../instruments'
import ErrorBoundary from '../ErrorBoundary'

const Root = () => {
  return (
    <ProviderUI>
      <ErrorBoundary>
        <BrowserRouter>
          <React.Fragment>
            <Routes />
            <UI />
          </React.Fragment>
        </BrowserRouter>
      </ErrorBoundary>
    </ProviderUI>
  )
}

export default hot(module)(Root)
