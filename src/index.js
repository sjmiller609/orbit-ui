'use strict'
import React from 'react'
import Root from './modules/app/Root'
import auth from './helpers/token'

import { ApolloClient } from 'apollo-client'
import { InMemoryCache, defaultDataIdFromObject } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { onError } from 'apollo-link-error'
import { ApolloLink } from 'apollo-link'
import { WebSocketLink } from 'apollo-link-ws'
import { ApolloProvider } from 'react-apollo'
import { getMainDefinition } from 'apollo-utilities'
import { render } from 'react-dom'

import './styles/global/index.scss'

const cache = new InMemoryCache({
  dataIdFromObject: object => {
    if (object.uuid) return object.__typename + ':' + object.uuid
    return defaultDataIdFromObject(object)
  },
})

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = auth.get()
  operation.setContext({
    headers: {
      authorization: token.token || '',
    },
  })

  return forward(operation)
})

const httpLink = new HttpLink({
  uri: window.API_HTTP,
  credentials: 'include',
})

// Create a WebSocket link:
const wsLink = new WebSocketLink({
  uri: window.API_WS,
  options: {
    reconnect: true,
    lazy: true, // only connect on subscribe
    reconnectionAttempts: 30,
    inactivityTimeout: 100000,
    onError: error => {
      // TODO make sure is set to match server
      // error.message has to match what the server returns.
      if (error.message === 'Invalid authentication') {
        // Reset the WS connection for it to carry the new JWT.
        wsLink.subscriptionClient.close(false, false)
      }
    },
    connectionParams: () => {
      return {
        authorization: auth.get().token,
      }
    },
  },
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path, name, data }) => {
      let msg = '[GraphQL error'
      if (name) msg += `| ${name}`
      if (message) msg += ']: Message: ' + message
      if (data) msg += `Data: ${JSON.stringify(data)}`
      if (locations) msg += `Location: ${JSON.stringify(locations)},`
      if (path) msg += `, Path: ${path}`
      console.log(msg)
      if (name && ~name.indexOf('AuthError'))
        window.location.pathname = '/logout/silent'
    })

  if (networkError) {
    if (
      ~networkError
        .toString()
        .toLowerCase()
        .indexOf('failed to fetch')
    )
      window.location.pathname = '/houston-down'
    console.log(`[Network error]: ${networkError}`)
  }
})

//only create the split in the browser (for SSR if ever implmented)
const link = process.browser
  ? ApolloLink.split(
      // split based on operation type
      ({ query }) => {
        const { kind, operation } = getMainDefinition(query)
        return kind === 'OperationDefinition' && operation === 'subscription'
      },
      wsLink,
      httpLink
    )
  : httpLink

const client = new ApolloClient({
  link: ApolloLink.from([errorLink, authMiddleware, link]),
  cache,
})

render(
  <ApolloProvider client={client}>
    <Root />
  </ApolloProvider>,
  document.getElementById('root')
)
