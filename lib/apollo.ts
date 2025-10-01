import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client/index.js";

export const client = new ApolloClient({
  link: new HttpLink({ uri: "https://beta.pokeapi.co/graphql/v1beta" }),
  cache: new InMemoryCache(),
});
