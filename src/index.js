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
    // May need to check into this for updating auth token on login/logout: https://github.com/apollographql/subscriptions-transport-ws/pull/348
    connectionParams: () =>
      // a promise that resolves to return the loginToken
      new Promise(resolve => {
        auth.get().then(token => {
          if (token) {
            resolve({
              authToken: token.token,
            })
          } else {
            resolve({
              authToken: '',
            })
          }
        })
      }),
  },
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path, name }) => {
      console.log(
        `[GraphQL error | ${name}]: Message: ${message}, Location: ${JSON.stringify(
          locations
        )}, Path: ${path}`
      )
    })

  if (networkError) console.log(`[Network error]: ${networkError}`)
})

const link = process.browser
  ? ApolloLink.split(
      //only create the split in the browser (for SSR if ever implmented)
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
