import { Router } from "express";
import conceitoRouter from "../resources/conceito/conceito.router";

const router = Router();

router.use("/conceito", conceitoRouter);

export default router;
