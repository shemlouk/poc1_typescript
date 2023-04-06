import errorHandler from "middlewares/errorHandler";
import express, { json } from "express";
import router from "routers";
import cors from "cors";

const app = express();

app.use(json());
app.use(cors());
app.use(router);
app.use(errorHandler);

app.listen(5000, () => {
  console.log("Server is running.");
});
