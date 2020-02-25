import { ApolloProvider } from '@apollo/react-hooks';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { client } from './config/apolloClient';
import MainRouter from './routers/MainRouter';

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root'),
);
