import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';

import ApolloClient from 'apollo-client';
import {ApolloLink} from 'apollo-link'
import {WebSocketLink} from 'apollo-link-ws'
import {ApolloProvider} from 'react-apollo';
import {HttpLink} from 'apollo-link-http'
import {InMemoryCache, defaultDataIdFromObject} from 'apollo-cache-inmemory'
import {getMainDefinition} from 'apollo-utilities'
import {onError} from 'apollo-link-error'

import history from 'utils/history';
import auth from 'utils/token';
import storage from 'utils/storage';
import {AuthProvider} from 'utils/context';

import Routes from './routes';
import './styles/global.css';

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
  });
  return forward(operation)
})

const httpLink = new HttpLink({
  uri: process.env.API_HTTP,
  credentials: 'include',
})

// Create a WebSocket link:
const wsLink = new WebSocketLink({
  uri: process.env.API_WS,
  options: {
    reconnect: true,
    lazy: true, // only connect on subscribe
    reconnectionAttempts: 30,
    inactivityTimeout: 100000,
    onError: error => {
      if (error.message === 'Invalid authentication') {
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
      console.log(msg) // eslint-disable-line no-console
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
    console.log(`[Network error]: ${networkError}`) // eslint-disable-line no-console
  }
})

const link = process.browser
  ? ApolloLink.split(
      ({ query }) => {
        const { kind, operation } = getMainDefinition(query)
        return kind === 'OperationDefinition' && operation === 'subscription'
      },
      wsLink,
      httpLink
    )
  : httpLink;

const client = new ApolloClient({
  link: ApolloLink.from([errorLink, authMiddleware, link]),
  cache
});

const App = () => {
  // App Auth context includes the token & data of the
  // currently logged in user.

  // To update this context at any given time, use the `updateAuth`,
  // reducer. This will ensure the user state is updated
  // across the entire application.

  // For more information please read up on React Context and
  // the state hooks available since v16.8.0

  const token = auth.get()
  const storageUser = JSON.parse(storage.getItem('user'));

  const initialState = {
    token: token.token || undefined,
    ...storageUser
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'updateAuth':
        storage.setItem('user', JSON.stringify({user: action.updateAuth.user}));
        return {
          ...state,
          ...action.updateAuth
        };
      case 'updateToken':
        auth.set({token: action.updateToken});
        return {
          ...state,
          token: action.updateToken
        };
      case 'updateUser':
        storage.setItem('user', JSON.stringify({user: action.updateUser}));
        return {
          ...state,
          user: action.updateUser
        };
      default:
        return state;
    }
  };

  return (
    <ApolloProvider client={client}>
      <Router history={history}>
        <AuthProvider initialState={initialState} reducer={reducer}>
          <Routes />
        </AuthProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
