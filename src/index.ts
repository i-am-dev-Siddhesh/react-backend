import bodyParser from "body-parser";
 import cors from "cors";
import dotenv from "dotenv";
import express, { Express } from "express";
 import generalRoutes from "./routes/generalRoutes";
import { __prod__ } from "./utils/constants";

const main = async () => {
  dotenv.config();
  const app: Express = express();
  const PORT = process.env.PORT || 8000;

  app.use(express.json());

  app.use(bodyParser.json());

  app.use(
    cors({
      origin: [process.env.CLIENT_URL!],
      methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD", "DELETE"],
      credentials: true,
    })
  );

  app.use("/v1", generalRoutes);

  app.listen(PORT, () =>
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`)
  );
};

main().catch((err) => {
  console.log("Error Occurred:", err);
  process.exit(1);
});
