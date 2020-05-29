import React from "react";
import { gql, useQuery } from "@apollo/client";
import { client, isLoggedInVar } from "./index";

const IS_LOGGED_IN = gql`
  query IsLoggedIn {
    isLoggedIn @client
  }
`;

const clearStore = async () => {
  await client.clearStore();
  isLoggedInVar(false);
};

const resetStore = async () => {
  await client.resetStore();
  isLoggedInVar(false);
};

export default function App() {
  const { loading, data } = useQuery(IS_LOGGED_IN);

  return (
    <main>
      <h1>Apollo Client Issue Reproduction</h1>
      <p>
        This application can be used to demonstrate an error in Apollo Client.
      </p>
      <h2>Names</h2>
      {loading ? <p>Loading…</p> : <p>{data.isLoggedIn.toString()}</p>}
      <button onClick={clearStore}>Clear Store</button>
      <button onClick={resetStore}>Reset Store</button>
    </main>
  );
}
