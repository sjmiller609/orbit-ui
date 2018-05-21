'use strict'
import React from 'react'
import Root from './modules/App/Root'
//import storage from './helpers/storage';
//import { handleErrors } from './helpers/handleErrors';

import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { onError } from 'apollo-link-error'
import { ApolloLink } from 'apollo-link'

import { ApolloProvider } from 'react-apollo'
import { render } from 'react-dom'

const cache = new InMemoryCache()

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem('token') || ''
  //  const organization = localStorage.getItem('organization') || ''
  operation.setContext({
    headers: {
      authorization: token,
    },
  })

  return forward(operation)
})

const httpLink = new HttpLink({
  uri: window.API_HTTP,
  credentials: 'include',
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    )
  if (networkError) console.log(`[Network error]: ${networkError}`)
})

const client = new ApolloClient({
  link: ApolloLink.from([errorLink, authMiddleware, httpLink]),
  cache,
})

render(
  <ApolloProvider client={client}>
    <Root />
  </ApolloProvider>,
  document.getElementById('app')
)
