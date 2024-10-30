import express, { Request, Response } from "express";
import validateEnv from "./utils/validadeEnv";
import dotenv from "dotenv";
import router from "./router/router";

dotenv.config();
validateEnv();
const PORT = process.env.PORT || 3333;

const app = express();
app.use(router);

app.listen(PORT, () => {
  console.log(`Express app iniciada na porta ${PORT}.`);
});
