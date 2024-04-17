import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
async function init() {
  const app = express();
  const PORT = Number(process.env.PORT) || 8000;
  app.use(express.json());
  // Create Graphql Server
  const server = new ApolloServer({
    typeDefs: `
        type Query{
            hello:String
            sayName(name:String):String
        }
    `,
    resolvers: {
      Query: {
        hello: () => "Hello there I am a graphql",
        sayName: (_, { name }: { name: string }) => `Hey there ${name}`,
      },
    },
  });

  await server.start();

  app.get("/", (req, res) => {
    res.json({ message: `server is running at PORT ${PORT}` });
  });

  app.use("/graphql", expressMiddleware(server));

  app.listen(PORT, () => {
    console.log(`Server is listening at ${PORT} http://localhost:${PORT}`);
  });
}
init();
