import express from "express";
import { expressMiddleware } from "@apollo/server/express4";
import createApolloGraphQlServer from "./graphql";
async function init() {
  const app = express();
  const PORT = Number(process.env.PORT) || 8000;
  app.use(express.json());
  // Create Graphql Server
  app.get("/", (req, res) => {
    res.json({ message: `server is running at PORT ${PORT}` });
  });

  app.use("/graphql", expressMiddleware(await createApolloGraphQlServer()));

  app.listen(PORT, () => {
    console.log(`Server is listening at ${PORT} http://localhost:${PORT}`);
  });
}
init();
