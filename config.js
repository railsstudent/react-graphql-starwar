import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: "https://api-euwest.graphcms.com/v1/ck5wca13qc9ux01fgaidt12m4/master",
  cache: new InMemoryCache()
});

export default client;
