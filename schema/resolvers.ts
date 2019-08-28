import { GraphQLDateTime } from 'graphql-iso-date';
import { chats, messages } from '../db';

const resolvers = {
  Query: {
    chats: () => chats,
    chat(root: any, { chatId }: any) {
      return chats.find(c => c.id === chatId);
    },
  },
  Date: GraphQLDateTime,
  Chat: {
    lastMessage: (chat: any) => {
      // return messages.find(m => m.id === chat.lastMessage);
      const lastMessage = chat.messages[chat.messages.length - 1];
      return messages.find(m => m.id === lastMessage);
    },
    messages(chat: any) {
      return messages.filter(m => chat.messages.includes(m.id));
    },
  },
};

export default resolvers;
