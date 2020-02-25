import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import { createHttpLink } from 'apollo-link-http';
import apolloLogger from 'apollo-link-logger';

const authMiddleware = setContext(async () => {
  const accessToken = localStorage.getItem('accessToken');

  return {
    headers: {
      Authorization: accessToken ? `Bearer ${accessToken}` : '',
    },
  };
});

const httpLink = createHttpLink({
  uri: process.env.API_URL,
});

const link = ApolloLink.from([authMiddleware, apolloLogger, httpLink]);

const cache = new InMemoryCache();

export const client = new ApolloClient({ cache, link });
