import { createTestClient } from 'apollo-server-testing';
import { ApolloServer, gql } from 'apollo-server-express';
import resolvers from '../../schema/resolvers';
import typeDefs from '../../schema/typeDefs';

describe('Query.chat', () => {
    it('should fetch a chat', async () => {
      const server = new ApolloServer({ resolvers, typeDefs });
      const { query } = createTestClient(server);
      const res = await query({
        variables: { chatId: '1' },
        query: gql`
            query GetChat($chatId: ID!) {
                chat(chatId: $chatId) {
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

