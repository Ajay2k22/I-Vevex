import { ApolloServer, BaseContext } from "@apollo/server";
import { User } from "./user";
async function createApolloGraphQlServer() {
  const server = new ApolloServer<BaseContext>({
    typeDefs: `
            type Query{
               ${User.queries}
            },
            type Mutation{
                ${User.mutations}
            }
        `,
    resolvers: {
      Query: {
        ...User.resolvers.queries,
      },
      Mutation: {
        ...User.resolvers.mutations,
      },
    },
  });

  await server.start();
  return server;
}

export default createApolloGraphQlServer;
