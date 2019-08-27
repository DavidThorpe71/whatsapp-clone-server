import { createTestClient } from 'apollo-server-testing';
import { ApolloServer, gql } from 'apollo-server';
import resolvers from '../../schema/resolvers';
import typeDefs from '../../schema/typeDefs';

describe('Query.chats', () => {
  it('should fetch all chats', async () => {
    const server = new ApolloServer({ resolvers, typeDefs });
    const { query } = createTestClient(server);
    const res = await query({
      query: gql`
        query GetChats {
          chats {
            id
            name
            picture
            lastMessage {
              id
              content
              createdAt
            }
          }
        }
      `,
    });
    expect(res.data).toBeDefined();
    expect(res.errors).toBeUndefined();
    expect(res.data).toMatchSnapshot();
  });
});
