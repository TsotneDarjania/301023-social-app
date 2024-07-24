import express from "express";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";

import { connectToMongoDB } from "./src/shared/index.js";
import { AuthRouter, UserRouter } from "./src/modules/index.js";

const app = express();
app.use(bodyParser.json());

dotenv.config();
const PORT = process.env["PORT"];

if (!process.env["PORT"]) {
  process.exit();
}

async function main() {
  await connectToMongoDB();

  app.use("/api/auth", AuthRouter);
  app.use("/api/user", UserRouter);

  app.listen(PORT, () => {
    console.log("social app is running");
  });
}

main();
