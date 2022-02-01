import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schema/schema.js";
import mongoose from "mongoose";
import { MONGODB } from "./config.js";

const app = express();

const PORT = process.env.PORT || 4000;

mongoose.connect(MONGODB, { useNewUrlParser: true }).then(() => {
  console.log("MongoDB Connected");
  return app.listen({ port: PORT });
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

// app.listen(4000, () => {
//   console.log("now listening for requets on port 4000");
// });
