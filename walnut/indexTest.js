import { GraphQLServer } from 'graphql-yoga';
import resolvers from './src/resolver';

const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers
});

server.start(() => console.log('graphQl Server is running'));
