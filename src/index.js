import React from "react";
import { render } from "react-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import { link } from "./graphql/link";
import App from "./App";

import "./index.css";

const cache = new InMemoryCache();

export const isLoggedInVar = cache.makeVar(true);

cache.policies.addTypePolicies({
  Query: {
    fields: {
      isLoggedIn() {
        return isLoggedInVar();
      },
    },
  },
});

export const client = new ApolloClient({
  cache,
  link,
});

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
