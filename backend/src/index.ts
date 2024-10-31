import express, { Request, Response } from "express";
import validateEnv from "./utils/validadeEnv";
import dotenv from "dotenv";
import router from "./router/v1Router";

dotenv.config();
validateEnv();
const PORT = process.env.PORT || 3333;

const app = express();

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Express app iniciada na porta ${PORT}.`);
});
