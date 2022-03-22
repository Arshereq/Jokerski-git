import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
import { RestLink } from "apollo-link-rest";
import { HttpLink } from "apollo-link-http";

const restLink = new RestLink({
  endpoints: {
    openExchangeRate: "https://open.exchangerate-api.com/v6/",
  },
});

const httpLink = new HttpLink({
  uri: "https://48p1r2roz4.sse.codesandbox.io",
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([restLink, httpLink]),
});
