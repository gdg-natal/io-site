import { ApolloClient, InMemoryCache, NormalizedCacheObject } from "@apollo/client";

const createApolloClient = () => {
  return new ApolloClient<NormalizedCacheObject>({
    uri: "https://api.gdg.natal.br/graphql",
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
