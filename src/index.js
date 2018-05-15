'use strict';
import 'babel-polyfill';
import React from 'react';
//import storage from './helpers/storage';
//import { handleErrors } from './helpers/handleErrors';

// ==== Who knows if I'm doing this right
import { ApolloClient, createNetworkInterface, ApolloProvider } from 'react-apollo';


import { render } from 'react-dom';

const networkInterface = createNetworkInterface({
  uri: window.API_HTTP
});

networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {};  // Create the header object if needed.
    }
    // get the authentication token from local storage if it exists
    req.options.headers.authorization = localStorage.getItem('token') || "";
    req.options.headers.organization = localStorage.getItem('organization') || "";
    next();
  }
}]);

networkInterface.useAfter([{
//  applyAfterware: handleErrors,
}]);

const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: r => r.id,
});

render(
  <ApolloProvider client={client} />,
  document.getElementById('app')
);
