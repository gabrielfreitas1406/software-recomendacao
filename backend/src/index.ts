import express, { Request, Response } from "express";
import validateEnv from "./utils/validadeEnv";
import dotenv from "dotenv";
import router from "./router/v1Router";
import cors from "cors";

dotenv.config();
validateEnv();

const app = express();
const PORT = process.env.PORT || 3333;

const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Express app iniciada na porta ${PORT}.`);
});
