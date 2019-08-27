import { gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    chats: [Chat!]!
  }

  scalar Date

  type Message {
    id: ID!
    content: String!
    createdAt: Date!
  }

  type Chat {
    id: ID!
    name: String!
    picture: String
    lastMessage: Message
  }
`;

export default typeDefs;
