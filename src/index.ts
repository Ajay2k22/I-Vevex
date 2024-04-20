import express from "express";
import { expressMiddleware } from "@apollo/server/express4";
import createApolloGraphQlServer from "./graphql";
import { APP_PORT } from "./config";
import { connectDB } from "./db";
import errorHandler from "./middleware/errorHandler/errorHandler";
async function init() {
  const app = express();
  const PORT = Number(APP_PORT) || 8000;
  app.use(express.json());
  // Create Graphql Server
  app.get("/", (req, res) => {
    res.json({ message: `server is running at PORT ${PORT}` });
  });
  await connectDB();
  app.use("/graphql", expressMiddleware(await createApolloGraphQlServer()));

  app.use(errorHandler);
  app.listen(PORT, () => {
    console.log(`Server is listening at ${PORT} http://localhost:${PORT}`);
  });
}
init();
