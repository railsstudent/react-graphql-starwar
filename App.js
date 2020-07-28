import React, { useState } from 'react';
import SearchForm from './SearchForm';
import { client, ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: "https://api-euwest.graphcms.com/v1/ck5wca13qc9ux01fgaidt12m4/master",
  cache: new InMemoryCache()
});

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