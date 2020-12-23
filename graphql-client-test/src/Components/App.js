import React from 'react';
import { render } from 'react-dom';
import Book from './Books/Books'

import { ApolloProvider } from '@apollo/client';
import client from '../gql_config/gql_config';

console.log(client);

export default function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>My first Apollo app 🚀</h2>
        <Book />
      </div>
    </ApolloProvider>
  );
}

