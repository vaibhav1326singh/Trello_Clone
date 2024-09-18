import { app } from "./app.js"

import dotenv from "dotenv";
import connectdb from "./db/index.js";

dotenv.config({
  path: "/.env",
});

connectdb()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`server is running on port ${process.env.PORT} `);
    });
  })
  .catch((err) => {
    console.error("mongodb error in connection", err);
  });
