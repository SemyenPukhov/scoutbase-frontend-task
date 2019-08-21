import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Routes from './Routes';

const client = new ApolloClient({ uri: 'https://countries.trevorblades.com/' });

const ApolloApp = () => (
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>
);

ReactDOM.render(<ApolloApp />, document.getElementById('root'));
