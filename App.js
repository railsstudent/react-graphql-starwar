import React, { useState } from 'react';
import SearchForm from './SearchForm';
import { ApolloProvider } from '@apollo/client';
import client from './config';

const App = () => {
  const [name] = useState('React');
  const headerStyle = {
    textAlign: 'center'
  }

  return (
    <ApolloProvider client={client}>
      <div className="container">
        <h2 style={headerStyle}>
          Search Star War Characters
        </h2>
        <SearchForm />
      </div>
    </ApolloProvider>
  );
}

export default App;