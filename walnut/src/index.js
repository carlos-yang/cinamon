import { GraphQLServer, PubSub } from 'graphql-yoga';

const pubsub = new PubSub();
const NEW_CHAT = 'NEW_CHAT';

//user array
let chattingLog = [
  {
    id: 0,
    writer: 'admin',
    description: 'HELLO'
  }
];

let fileLog = [
  {
    id: 0,
    name: 'file1',
    size: 50,
    author: 0
  }
];

const typeDefs = `
  type Chat {
    id: Int!
    writer: String!
    description: String!
    files: [File!]!
  }
  type Query {
    chatting: [Chat]!
  }
  type File {
      id: ID!
      name: String!
      size: Int!
      author: Chat!
  }
  type Mutation {
      write(writer: String!, description: String!, file: Object!): String!
  }
  type Subscription{
      newChat: Chat
  }
  `;
const resolvers = {
  Query: {
    chatting: () => {
      return chattingLog;
    }
  },
  Mutation: {
    write: (_, { writer, description, file }) => {
      const id = chattingLog.length;
      const newChat = {
        id,
        writer,
        description
      };
      chattingLog.push(newChat);
      const fileId = fileLog.length;
      const newFile = {
        id: fileId,
        name: file.name,
        size: file.size,
        author: id
      };
      pubsub.publish(NEW_CHAT, {
        newChat
      });
      return 'ok';
    }
  },
  Subscription: {
    newChat: {
      subscribe: (_, __, { pubsub }) => pubsub.asyncIterator(NEW_CHAT)
    }
  }
};

const server = new GraphQLServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  context: { pubsub }
});

server.start(() => console.log('Graphql Server Running'));
