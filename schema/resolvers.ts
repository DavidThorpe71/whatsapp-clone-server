import { GraphQLDateTime } from 'graphql-iso-date';
import { chats, messages } from '../db';

const resolvers = {
  Query: {
    chats: () => chats,
  },
  Date: GraphQLDateTime,
  Chat: {
    lastMessage: (chat: any) => {
      return messages.find(m => m.id === chat.lastMessage);
    },
  },
};

export default resolvers;
