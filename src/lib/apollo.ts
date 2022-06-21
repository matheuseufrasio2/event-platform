import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4nv8djf0pq301yweloxf4ev/master',
  cache: new InMemoryCache()
});