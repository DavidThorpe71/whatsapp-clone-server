import { ApolloServer, gql } from 'apollo-server';
import resolvers from './schema/resolvers';
import typeDefs from './schema/typeDefs';

const server = new ApolloServer({ typeDefs, resolvers });
const port = process.env.PORT || 4000;

server.listen(port).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
